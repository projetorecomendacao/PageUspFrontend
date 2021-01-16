import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BIO_max_score, MUL_max_score, PSI_max_score, SOC_max_score } from 'src/app/shared/constantes/POSI_dominios';
import { REST_URL_ORIENTADOR, REST_URL_PAGE } from 'src/app/shared/constantes/REST_API_URLs';
import { PageForm } from 'src/app/shared/forms/page.form';
import { BiologicalAspects } from 'src/app/shared/models/biological-aspects.model';
import { MultidisciplinaryDomain } from 'src/app/shared/models/multidimentional-aspects';
import { Orientando } from 'src/app/shared/models/orientandos';
import { Page } from 'src/app/shared/models/page.model';
import { PsychologicalAspects } from 'src/app/shared/models/psychological-aspects.model';
import { SocialAspects } from 'src/app/shared/models/social-aspects.model';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';
import { DAOService } from 'src/app/shared/services/dao.service';

@Component({
  selector: 'app-exporta-page',
  templateUrl: './exporta-page.component.html'
})
export class ExportaPageComponent implements OnInit {
  //Trás a lista de alunos
  participants : Orientando[] = new Array <Orientando>();
  //Trás a lista de page de cada grupo de alunos 
  pages : Page[] = new Array<Page>();
  //Cria a lista com os dados dos pages que estão preenchidos
  lista : string[] = new Array<string>();

  constructor(private dao: DAOService, private router: Router, private pageForm : PageForm, private checaCampo: ChecaCampo) { }

  ngOnInit(): void {
    // Montando o cabeçalho
    
    let cabeca: string = 'ID,';
    for (let i=1; i<104; i++){
      cabeca += 'Q' + i.toString() + ',';
    }

    cabeca += 'Q104,Déficit Cognitivo,Atitude Neg. Envelhecimento,Depressão,Déficit Sensorial,Incap. Funcional,Desnutrição,DCV,Uso Inad. Medicamentos,Baixo Sup. Social,Violência,Problemas Ambientais,Quedas';
    cabeca += ',Psicológicos, Biológicos, Sociais, Multidimensional';
    this.lista.push(cabeca);
    
    //Percorrendo todos os grupos de alunos cadastrados
    this.dao.getObjects(REST_URL_ORIENTADOR).subscribe((data: Orientando[]) => {
      //console.log(data)
      this.participants = data;
      //pegando os pages de cada grupo
      this.participants.forEach(participant => {
        this.dao.getPageOrientador(participant.id.toString()).subscribe((dataPage: Page[]) => {
          //console.log(dataPage);
          this.pages = dataPage;
          this.pages.forEach(page => {
            // usado para ver como está os PAGe por dimensão..            
            //this.verPage2(page.id);
            
            //relatório do André com as repostas por questão domínio e dimensão..
            this.verPage(page.id);
          });
        }, erro => {
          alert('Não foi possível acessar os dados');
        });
      });
    }, erro => {
      alert('Não foi possível acessar os dados');
      this.router.navigate(['private']).then();
    });

  }

  voltar(){
    this.router.navigate(['private']).then();
  }

 // Sets the page and redirects
 verPage(page : number){
  if (page > 0) {
    this.dao.getObject(REST_URL_PAGE,page.toString()).subscribe((response : any)  =>{
      //monta os aspectos psicológicos do PAGe

      let psi : PsychologicalAspects = {           
        id : response.psi[0].id,
        cognition_deficit_instance : response.cognitionDeficit[0],
        negative_attitudes_aging_instance : response.negativeAttitudesAging[0], 
        depression_instance :  response.depression[0],
        comments :  response.psi[0].comments,
        max_score : PSI_max_score
      }


      //monta os aspectos biológicos do PAGe
      let bio : BiologicalAspects = {
        id: response.bio[0].id,
        sensoryDeficit_instance: response.sensoryDeficit[0],
        functionalDisability_instance: response.functionalDisability[0],
        malNutrition_instance: response.malnutrition[0],
        cardiovascularFactors_instance: response.cardiovascularFactors[0],
        misuseMedications_instance: response.misuseMedications[0],
        comments: response.bio[0].comments,
        max_score: BIO_max_score
      }  

      //monta os aspectos sociais do PAGe
      let soc :  SocialAspects = {
        id: response.soc[0].id,
        lowSocialSupport_instance: response.lowSocialSupport[0],
        environmentalProblems_instance: response.environmentalProblems[0],
        violence_instance: response.violence[0],
        comments: response.soc[0].comments,
        max_score : SOC_max_score
      }

      //monta os aspectos multidimensional do PAGe
      let mul : MultidisciplinaryDomain = {
        id: response.mul[0].id,
        falls_instance: response.falls[0],
        comments: response.mul[0].comments,
        max_score: MUL_max_score
      }
      //cria o page

      let page_ : Page = 
      {
        id : response.cabecaPage.id,
        service: response.cabecaPage.service,
        entrance: response.cabecaPage.entrance,
        interviewed: response.cabecaPage.interviewed,
        interviewer: response.cabecaPage.interviewer,
        avaliation_date: response.cabecaPage.avaliation_date,
        start_time: response.cabecaPage.start_time,
        end_time: response.cabecaPage.end_time,
        created_at: response.cabecaPage.created_at,
        updated_at: response.cabecaPage.updated_at,
        
        gerontologist_id: response.cabecaPage.gerontologist,
      
        participant: response.participant[0],
        participant_situation: response.participanteSituation[0],
        psychologicalAspects: psi,
        biologicalAspects: bio,
        socialAspects: soc,
        multidisciplinaryDomain: mul,
        demandMap : response.demandMap[0],
      }
      if (this.pageCompleto(page_)){
        let respostaPage : string = page_.id.toString() + ',' ;
        let localForm : FormGroup;
        localForm = this.pageForm.geraFormGroup(page_);
        let dominio = '';
        let dimensao = '';
        let vetRespota : string[] = new Array(105);
        let vetDominio : number[] = new Array(12);
        // Cria o vetor de resposta só com zero..
        for (let i1=1; i1 < 105; i1++){
          vetRespota[i1]='0';
        }
        for (let posDominio=0; posDominio < 12; posDominio++){
          // Zera o vetor de resposta de domínios
          vetDominio[posDominio]=0;
          dominio = this.checaCampo.getDominio(posDominio);
          dimensao = this.checaCampo.getDimensao(posDominio);
          //Preenche o Vetor de Resposta de acordo com os pesos das questões
          for (let posQuestao = this.checaCampo.getQuestaoInicio(posDominio); posQuestao <= this.checaCampo.getQuestaoFim(posDominio); posQuestao++ ){
            if (this.checaCampo.campo(posQuestao) != "0") { //Verifica se o campo tem questão
              let _campo = localForm.get(dimensao).get(dominio).get(this.checaCampo.campo(posQuestao)).value;
              let _sim = this.checaCampo.sim(posQuestao);
              //Verifica se a resposta vale um ou zero...
              if ( _campo == 'S' && _sim == '1'){
                vetRespota[posQuestao]='1';
                vetDominio[posDominio]++; 
              }
              if ( _campo == 'N' && _sim == '0'){
                vetRespota[posQuestao]='1';
                vetDominio[posDominio]++; 
              }
            }
          }
        }
        for (let i2=1; i2 <= 104; i2++){
          respostaPage += vetRespota[i2] + ',';
        }
        for (let i3=0; i3 < 12; i3++){
          respostaPage += vetDominio[i3].toString() + ',';
        }
        let psi = vetDominio[0] + vetDominio[1] + vetDominio[2]  
        let bio = vetDominio[3] + vetDominio[4] + vetDominio[5] + vetDominio[6]  + vetDominio[7]   
        let soc = vetDominio[8] + vetDominio[9] + vetDominio[10]  
        let mul = vetDominio[11]
        respostaPage += psi.toString() + ',' + bio.toString() + ',' + soc.toString() + ',' + mul.toString()
        this.lista.push(respostaPage);
      }
    },error => {
      alert('Page não encontrado..');  
    });
  } else {
    alert('Page Não encontrado!!!')
  }
}

pageCompleto(p : Page): boolean {
  //console.log(p.multidisciplinaryDomain)
  if (p.participant_situation.id < 1) return false;
  if (p.multidisciplinaryDomain.id < 1) return false;
  if (p.psychologicalAspects.id < 1) return false;
  if (p.biologicalAspects.id < 1) return false;
  if (p.socialAspects.id < 1) return false;
  return true
}



// Método utilizado apenas para ver os alunos que já terminaram..
// Sets the page and redirects
 verPage2(page : number){
  if (page > 0) {
    this.dao.getObject(REST_URL_PAGE,page.toString()).subscribe((response : any)  =>{
      //monta os aspectos psicológicos do PAGe
      let volta: string = response.cabecaPage.interviewer;
      volta += '  Psi: ' + response.psi[0].id;
      volta += '  Bio: ' + response.bio[0].id;
      volta += '  Soc: ' + response.soc[0].id;
      volta += '  Mul: ' + response.mul[0].id;
      volta += '  Map: ' + response.demandMap[0].id;
      this.lista.push(volta);
    },error => {
      alert('Page não encontrado..');  
    });
  } else {
    alert('Page Não encontrado!!!')
  }
}

}
