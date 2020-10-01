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
              private daoService: DAOService, private pageGerador : PageGerador, private userService: UserService) {

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

  // Sets the page and redirects
  goTo(page: number) {
    console.log(`page: ${page}`)
    //Inicializa o PAGe no page service
    this.pageService.page = this.pageGerador.pegaPage(this.pageService.participant);    
    if (page > 0) {
      this.daoService.getObject(REST_URL_PAGE,page.toString()).subscribe((response : any)  =>{
        //monta os aspectos psicológicos do PAGe
        console.log(response)
        let psi : PsychologicalAspects
        (
          response.psi, 
          response.cognitionDeficit, 
          response.negativeAttitudesAging,
          response.depression
        )
        console.log(psi);
        //monta os aspectos biológicos do PAGe
        let bio : BiologicalAspects
        (
          response.bio,
          response.sensoryDeficit,
          response.functionalDisability,
          response.malnutrition,
          response.cardiovascularFactors,
          response.misuseMedications
        )
        //monta os aspectos sociais do PAGe
        let soc :  SocialAspects 
        (
          response.soc,
          response.lowSocialSupport,
          response.environmentalProblems,
          response.violence
        )
        //monta os aspectos multidimensional do PAGe
        let mul : MultidisciplinaryDomain
        (
          response.mul,
          response.falls
        )
        //cria o page
        let page_ : Page
        (
          response.cabecaPage,
          this.pageService.participant,
          response.participanteSituation,
          psi, bio, soc, mul, response.demandMap 
        )
        //seta o page
        console.log(page_)
        this.pageService.page = page_;
        console.log(this.pageService.page);
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