import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';

@Component({
  selector: 'app-dominio',
  templateUrl: './dominio.component.html'
})
export class DominioComponent implements OnInit {
  //Form
  @Input() pageForm: FormGroup;

  //Posicao do dominio na estrutura do PAGe
  @Input() posicaoDominio : number;

  //dominio e dimensao 
  dimensao: string; 
  dominio: string; 

  nomeDominio : string;

  //Pontuação máxima
  max_score : number;

  //Campo Investigar
  campoInvestigar : string;

  //Campo de Score
  campoScore : string;

  //Questão Inicial
  questaoInicio : number;
  
  //Questão Final
  questaoFim : number;

  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;

  //Pontos da dimensão
  public score : number = 0;

  //Cores do domínio
  public corTitulo : string;
  public corLateral : string;

  //O serviço checaCampo retorna as imagens de verificação dos campos 
  constructor(private checaCampo : ChecaCampo) {
  }

  //contagem dos campos que combinam para calcular o score
  conta_certo():number{
    this.score = 0;
      for (let i= this.questaoInicio;  i <= this.questaoFim; i++){
        //console.log(`inicio: ${this.questaoInicio}  fim: ${this.questaoFim}   i : ${i}  Valor:  ${this.checaCampo.campo(i)}`)
        if (this.checaCampo.campo(i) != "0") {
          let _campo = this.pageForm.get(this.dimensao).get(this.dominio).get(this.checaCampo.campo(i)).value;
          let _sim = this.checaCampo.sim(i);
          if ( _campo == 'S' && _sim == '1'){
            this.score++;
          }
          if ( _campo == 'N' && _sim == '0'){
            this.score++;
          }
        }
    }
    this.pageForm.get(this.dimensao).get(this.dominio).get(this.campoScore).setValue(this.score);
    return this.score;
  }
  
  ngOnInit():void {
    this.dimensao = this.checaCampo.getDimensao(this.posicaoDominio);
    this.dominio = this.checaCampo.getDominio(this.posicaoDominio);
    this.nomeDominio = this.checaCampo.getNomeDominio(this.posicaoDominio);
    this.max_score = this.checaCampo.getMax_score(this.posicaoDominio);
    this.campoInvestigar = this.checaCampo.getCampoInvestigar(this.posicaoDominio);
    this.campoScore = this.checaCampo.getCampoScore(this.posicaoDominio);
    this.questaoInicio =  this.checaCampo.getQuestaoInicio(this.posicaoDominio);
    this.questaoFim = this.checaCampo.getQuestaoFim(this.posicaoDominio);
    this.corTitulo = this.checaCampo.getCorTitulo(this.posicaoDominio);
    this.corLateral = this.checaCampo.getCorLateral(this.posicaoDominio);
    console.log(this.corLateral)
  }
  
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
