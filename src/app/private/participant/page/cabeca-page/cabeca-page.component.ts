import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';
import { PageForm } from '../../../../shared/forms/page.form';

@Component({
  selector: 'app-cabeca-page',
  templateUrl: './cabeca-page.component.html'
})
export class CabecaPageComponent implements OnInit {
  
  @Input() pageForm : FormGroup;

  teste = 'assets/checked_not_bak.png';
  
  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;


  // método que verifica se o form está válido
  formValido(): Boolean{
    this.branco = this.checaCampo.branco(this.pageForm.get('cabecaPageForm'));
    this.errado = this.checaCampo.errado(this.pageForm.get('cabecaPageForm'));
    return this.pageForm.get('cabecaPageForm').valid;
  }

  //Verifica e muda a figura de status de cada campo
  mudou(campo : string): string {
    return this.checaCampo.status(this.pageForm.get('cabecaPageForm').get(campo));
  }

  //O service checaCampo serve para verificar o status do campo e do formulário
  constructor(private checaCampo: ChecaCampo){}

  ngOnInit() { }

  submit() { 
    //for (var caca in this.pageForm.get('cabecaPageForm').value){
    //  console.log(caca);
    //  this.pageForm.get('cabecaPageForm').get(caca).markAsTouched;
    //  this.pageForm.get('cabecaPageForm').get(caca).updateValueAndValidity;
    //}
  }
}