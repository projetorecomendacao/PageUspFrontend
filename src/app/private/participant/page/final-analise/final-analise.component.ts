import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';
import { Router } from '@angular/router';
import { PageService } from 'src/app/shared/services/page.service';
import { DAOService } from 'src/app/shared/services/dao.service';
declare const expFile : any;


@Component({
  selector: 'app-final-analise',
  templateUrl: './final-analise.component.html'
})
export class FinalAnaliseComponent implements OnInit {

  @Input() pageForm: FormGroup;
  @Input() desligar : boolean;
  resultado : string;

  conta:number=0;
  
  constructor(private checaCampo: ChecaCampo, private router: Router, public pageService : PageService, private dao : DAOService) { }

  ngOnInit() { }

  // método que verifica a situação dos campos do form
  mudou(campo: string): string{ 
    return this.checaCampo.status(this.pageForm.get('demandMapForm').get(campo));
  }

  //Verifica e muda a figura de status do campo horário final que é do cabeça page
  mudou2(campo : string): string {
     return this.checaCampo.status(this.pageForm.get('cabecaPageForm').get(campo));
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

  //Quando for chamado pela view será desabilitado...
  desabilitar():boolean{
    return this.desligar || false;
  }

  gravarTxt(){
    this.resultado = "Page: " + this.pageService.page.id.toString() + JSON.stringify(this.pageForm.value,null,2)
    expFile(this.resultado);
  }
}
