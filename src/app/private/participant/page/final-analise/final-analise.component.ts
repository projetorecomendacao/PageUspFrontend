import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';
import { Router } from '@angular/router';
import { PageService } from 'src/app/shared/services/page.service';
import { DAOService } from 'src/app/shared/services/dao.service';
import { REST_URL_PAGE } from 'src/app/shared/constantes/REST_API_URLs';

@Component({
  selector: 'app-final-analise',
  templateUrl: './final-analise.component.html'
})
export class FinalAnaliseComponent implements OnInit {

  @Input() pageForm: FormGroup;

  conta:number=0;
  
  constructor(private checaCampo: ChecaCampo, private router: Router, public pageService : PageService, private dao : DAOService) { }

  ngOnInit() { }

  // método que verifica a situação dos campos do form
  mudou(campo: string): string{ 
    var volta: string = this.checaCampo.inicio();
    if(!this.pageForm.get('demandMapForm').get(campo).pristine){
      volta = this.checaCampo.checa(this.pageForm.get('demandMapForm').get(campo).valid);
    }
    return volta;
  }

  graficos(): boolean{
    return this.pageForm.get('multidimensionalAspectsForm').valid;
  }

  // método que verifica se o form está válido
  formValido(): Boolean{
    return this.pageForm.get('demandMapForm').valid;
  } 

  submit() { 

  }
}
