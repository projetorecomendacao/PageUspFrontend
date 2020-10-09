import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {Page} from '../../../shared/models/page.model';

import { UserService } from 'src/app/security/user.service';
import { PsychologicalAspects } from 'src/app/shared/models/psychological-aspects.model';
import { BiologicalAspects,  } from 'src/app/shared/models/biological-aspects.model';
import { SocialAspects } from 'src/app/shared/models/social-aspects.model';
import {  MultidisciplinaryDomain } from 'src/app/shared/models/multidimentional-aspects';
import { PageService } from 'src/app/shared/services/page.service';
import { DAOService } from 'src/app/shared/services/dao.service';
import { PageGerador } from 'src/app/shared/services/page.gerador';
import { REST_URL_PAGE } from 'src/app/shared/constantes/REST_API_URLs';
import { EstruturaPage } from 'src/app/shared/constantes/estruturaPage';


@Component({
  selector: 'app-pages-list',
  templateUrl: './pages-list.component.html'
})
export class PagesListComponent implements OnInit {

  participantName : string;
  participantIdade : number;
  participantSexo : string;
  participantID : number;

  public pages: Page[] = new Array<Page>();

  constructor(private router: Router, private pageService: PageService, 
              private daoService: DAOService, private pageGerador : PageGerador, 
              private userService: UserService, private estruturaPage : EstruturaPage) {

  }

   public desenvolvedor(): boolean {
     return this.userService.getId() == 1;
   }

  ngOnInit() {
    this.participantID = this.pageService.participant.id;
    this.participantName = this.pageService.participant.p01_name;
    this.participantIdade = this.pageService.participant.p05_age;
    this.participantSexo = this.pageService.participant.p06_gender;

    this.daoService.getObjects(REST_URL_PAGE).subscribe( (response: any) => {
      for (const page of response) {
        if (page.participant == this.pageService.participant.id){
          this.pages.push(page);
          console.log(page);
        }
      }
    });
  }


  verificaPage(p : Page): boolean {
    if (p.participant_situation == null) return false;
    if (p.multidisciplinaryDomain == null) return false;
    if (p.psychologicalAspects == null) return false;
    if (p.biologicalAspects == null) return false;
    if (p.socialAspects == null) return false;
    if (p.demandMap == null) return false;
    return true
  }

  // Sets the page and redirects
  goTo(page: number) {
    //Inicializa o PAGe no page service
    this.pageService.page = this.pageGerador.pegaPage(this.pageService.participant);    
    if (page > 0) {
      this.daoService.getObject(REST_URL_PAGE,page.toString()).subscribe((response : any)  =>{
        //monta os aspectos psicológicos do PAGe

        let psi : PsychologicalAspects = {           
          id : response.psi[0].id,
          cognition_deficit_instance : response.cognitionDeficit[0],
          negative_attitudes_aging_instance : response.negativeAttitudesAging[0], 
          depression_instance :  response.depression[0],
          comments :  response.psi[0].comments,
          max_score : 19
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
          max_score: 33
        }  

        //monta os aspectos sociais do PAGe
        let soc :  SocialAspects = {
          id: response.soc[0].id,
          lowSocialSupport_instance: response.lowSocialSupport[0],
          environmentalProblems_instance: response.environmentalProblems[0],
          violence_instance: response.violence[0],
          comments: response.soc[0].comments,
          max_score : 31
        }

        //monta os aspectos multidimensional do PAGe
        let mul : MultidisciplinaryDomain = {
          id: response.mul[0].id,
          falls_instance: response.falls[0],
          comments: response.mul[0].comments,
          max_score: 16
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
        
          participant: this.pageService.participant,
          participant_situation: response.participanteSituation[0],
          psychologicalAspects: psi,
          biologicalAspects: bio,
          socialAspects: soc,
          multidisciplinaryDomain: mul,
          demandMap : response.demandMap[0],
        }
        //seta o page
        this.pageService.page = page_;
        this.router.navigate(['private/participant/page/']).then();
        
      },error => {
        alert('Page não encontrado..');  
        this.router.navigate(['private/']).then();
      });
    } else {
      this.pageService.page.id = page;
      this.router.navigate(['private/participant/page/']).then();
    }
  }

  voltar(){
    this.router.navigate(['private/']).then();  
  }

  // TODO - If the user clicks twice on the delete button, it returns deletes and returns error. It is interesting to disable the button while waiting for the response
  delete(id: number) {
    this.daoService.deleteObject(REST_URL_PAGE, id.toString()).subscribe(response => {
      const pageIndex = this.pages.findIndex(page => page.id === id);
      this.pages.splice(pageIndex, 1);
    }, error => {
      alert('erro ao deletar');
    });
  }

}