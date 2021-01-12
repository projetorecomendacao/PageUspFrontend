import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { REST_URL_PAGE } from 'src/app/shared/constantes/REST_API_URLs';
import { BiologicalAspects } from 'src/app/shared/models/biological-aspects.model';
import { MultidisciplinaryDomain } from 'src/app/shared/models/multidimentional-aspects';
import { Page } from 'src/app/shared/models/page.model';
import { PsychologicalAspects } from 'src/app/shared/models/psychological-aspects.model';
import { SocialAspects } from 'src/app/shared/models/social-aspects.model';
import { DAOService } from 'src/app/shared/services/dao.service';
import { PageGerador } from 'src/app/shared/services/page.gerador';
import { PageService } from 'src/app/shared/services/page.service';
import {Participant} from 'src/app/shared/models/participant.model';
import { BIO_max_score, MUL_max_score, PSI_max_score, SOC_max_score } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-orientador-list-page',
  templateUrl: './orientador-list-page.component.html'
})

export class OrientadorListPageComponent implements OnInit {
  id : number;
  pages : Page[] = new Array<Page>();
  participant : Participant = {
    id:0,
    p00_email:'',p01_name:'',p01_name_social:'',p02_address:'',p03_communication:'',
    p04_birth_date:'',p05_age:0,p06_gender:'',p20_profile_photo_URL:''
  }

  constructor(private dao : DAOService, private activateRoute: ActivatedRoute, private router: Router,
        private pageService : PageService, private pageGerador: PageGerador) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.dao.getPageOrientador(this.id.toString()).subscribe((data: Page[]) => {
      console.log(data);
      this.pages = data;
    }, erro => {
      alert('Não foi possível acessar os dados');
    });
  }

  // Sets the page and redirects
  verPage(page : number){
    //Inicializa o PAGe no page service
    
    this.pageService.page = this.pageGerador.pegaPage(this.participant);    
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
        //seta o page
        this.pageService.participant = page_.participant;
        this.pageService.page = page_;
        this.router.navigate(['private/pageView/',this.id,'orientadorListPage']).then();
        
      },error => {
        alert('Page não encontrado..');  
      });
    } else {
      alert('Page Não encontrado!!!')
    }
  }

  pageCompleto(p : Page): boolean {
    if (p.participant_situation == null) return false;
    if (p.multidisciplinaryDomain == null) return false;
    if (p.psychologicalAspects == null) return false;
    if (p.biologicalAspects == null) return false;
    if (p.socialAspects == null) return false;
    if (p.demandMap == null) return false;
    return true
  }


  voltar(){
    this.router.navigate(['private/orientador']); 
  }

}
