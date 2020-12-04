import { Injectable } from '@angular/core';
import { Page } from '../models/page.model';
import { Participant} from '../models/participant.model';
import { UserService } from '../../security/user.service';
import { DAOService } from './dao.service';
import { FormGroup } from '@angular/forms';
import { REST_URL_PAGE } from '../constantes/REST_API_URLs';
import { Router } from '@angular/router';


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

  constructor(private dao: DAOService, private userService: UserService, private router : Router) { 
  }

  reset() {
    this._page = null;
  }

  criaEnviar(pageForm : FormGroup): any{
    var enviar : Enviar = {
      participant_id : this._page.participant.id,
      gerontologist_id : this.userService.getId(),
      cabecaPage : pageForm.get('cabecaPageForm').value,
      participant_situation: pageForm.get('participantFormForm').valid ? pageForm.get('participantFormForm').value : {'estaVazio' : ''},
      psychologicalAspects: pageForm.get('psychologicalAspectsForm').valid ? pageForm.get('psychologicalAspectsForm').value : {'estaVazio' : ''},
      biologicalAspects: pageForm.get('biologicalAspectsForm').valid ? pageForm.get('biologicalAspectsForm').value : {'estaVazio' : ''},
      socialAspects: pageForm.get('socialAspectsForm').valid ? pageForm.get('socialAspectsForm').value : {'estaVazio' : ''},
      multidisciplinaryDomain: pageForm.get('multidimensionalAspectsForm').valid ? pageForm.get('multidimensionalAspectsForm').value : {'estaVazio' : ''},
      demandMap : pageForm.get('demandMapForm').valid ? pageForm.get('demandMapForm').value : {'estaVazio' : ''}
    }
    return enviar;
  }

  //Método que é utilizado para gravar o page
  submit(pageForm: FormGroup) {
    // O grupo 0 é o botão do cabeça page.. quando grava a primeira vez atualiza o id do PAGE

    var enviar = this.criaEnviar(pageForm);

    if (this._page.id <= 0){
      return this.dao.postObject(REST_URL_PAGE,enviar).subscribe((data:any)=>{
        this._page.id = data.id;
        console.log(data);
      });
    } else {
      return this.dao.putObject(REST_URL_PAGE,enviar, this.page.id.toString()).subscribe((data:any)=>{
        console.log(data);
      });
    }
  }
}

interface Enviar {
  gerontologist_id : number;
  participant_id : number;
  cabecaPage : any;
  participant_situation: any;
  psychologicalAspects: any;
  biologicalAspects: any;
  socialAspects: any;
  multidisciplinaryDomain: any;
  demandMap : any;
}