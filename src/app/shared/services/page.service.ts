import { Injectable } from '@angular/core';
import { Page } from '../models/page.model';
import { Participant} from '../models/participant.model';
import { UserService } from '../../security/user.service';
import { DAOService } from './dao.service';
import { FormGroup } from '@angular/forms';
import { REST_URL_PAGE } from '../constantes/REST_API_URLs';


@Injectable({
  providedIn: 'root'
})
export class PageService {
  //participante
  private _participant: Participant;

  //page
  private _page : Page;

  get page() { return this._page; }

  set page(page: Page) { this._page = page; }

  get participant() { return this._participant; }
  
  set participant(p: Participant) { this._participant = p; }

  //elementos do PAGe
  get participantSituation() { return this.page.participant_situation; }
  get psychologicalAspects() { return this.page.psychologicalAspects; }
  get biologicalAspects() { return this.page.biologicalAspects; }
  get socialAspects() { return this.page.socialAspects; }
  get multidisciplinaryDomain() { return this.page.multidisciplinaryDomain; }

  constructor(private dao: DAOService, private userService: UserService) { 
  }

  reset() {
    this._page = null;
  }

  //Método que é utilizado para gravar o page
  submit(pageForm: FormGroup) {
    //Quando o page tem o ID -1 é um page preenchido e quando é null é um novo page vazio
    if (this._page.id == 0 || this._page.id == -1){
      this.dao.postObject(REST_URL_PAGE,pageForm.value).subscribe((data:any)=>{
        console.log(data);
      });     
    } else {
      this.dao.putObject(REST_URL_PAGE,pageForm.value,this._page.id.toString()).subscribe((data:any)=>{
        console.log(data);
      }); 
    }
  }

}