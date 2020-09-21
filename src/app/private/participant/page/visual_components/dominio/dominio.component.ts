import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-dominio',
  templateUrl: './dominio.component.html'
})
export class DominioComponent implements OnInit {
  //Form
  @Input() pageForm: FormGroup;

  //dominio e dimensao 
  @Input() dimensao: string; 
  @Input() dominio: string; 

  @Input() nomeDominio : string;

  //Pontuação máxima
  @Input() max_score : number;

  //Campo Investigar
  @Input() campoInvestigar : string;

  //Campo de Score
  @Input() campoScore : string;

  //Questão Inicial
  @Input() questaoInicio : number;
  
  //Questão Final
  @Input() questaoFim : number;

  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;

  //Pontos da dimensão
  public score : number = 0;

  //O serviço checaCampo retorna as imagens de verificação dos campos 
  constructor(private checaCampo : ChecaCampo) { }

  //contagem dos campos que combinam para calcular o score
  conta_certo():number{
    this.score = 0;
    for (let i= this.questaoInicio;  i <= this.questaoFim; i++){
      let _campo = this.pageForm.get(this.dimensao).get(this.dominio).get(this.checaCampo.campo(i)).value;
      let _sim = this.checaCampo.sim(i);
      if ( _campo == 'S' && _sim == '1'){
        this.score++;
      }
      if ( _campo == 'N' && _sim == '0'){
        this.score++;
      }
    }
    this.pageForm.get(this.dimensao).get(this.dominio).get(this.campoScore).setValue(this.score);
    return this.score;
  }
  
  ngOnInit():void {}
  
  // método que verifica se o form está válido
  formValido(): Boolean{
    this.branco = this.checaCampo.branco(this.pageForm.get(this.dimensao).get(this.dominio));
    this.errado = this.checaCampo.errado(this.pageForm.get(this.dimensao).get(this.dominio));
    return this.pageForm.get(this.dimensao).get(this.dominio).valid;
  }

  //Verifica e muda a figura de status de cada campo
  mudou(campo : string): string {
    return this.checaCampo.status(this.pageForm.get(this.dimensao).get(this.dominio).get(campo));
  }

}
