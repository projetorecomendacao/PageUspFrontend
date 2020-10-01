import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';


@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html'
})
export class QuestoesComponent implements OnInit {

  //todos os inputs..
  @Input() pageForm : FormGroup;
  //número da questão
  @Input() numeroQuestao: number;
  //posicão domínio
  @Input() posicaoDominio : number;


  //variáveis de apoio
  dominio: string;
  dimensao: string;
  sim : string;
  nao: string;
  campo: string;

  texto : string;

  
  constructor(private checaCampo: ChecaCampo) { 

  }

  ngOnInit(): void {
    //Dados da questão - número questão
    this.texto = `<b class='azul'>${this.numeroQuestao}.</b> ` + this.checaCampo.questao(this.numeroQuestao); 
    this.sim = this.checaCampo.sim(this.numeroQuestao);
    this.nao = this.checaCampo.nao(this.numeroQuestao);
    this.campo = this.checaCampo.campo(this.numeroQuestao);

    //Dados do domínio - número do domínio
    this.dominio = this.checaCampo.getDominio(this.posicaoDominio);
    this.dimensao = this.checaCampo.getDimensao(this.posicaoDominio);

  }

  //para verificar o desenho do campo
  mudou(nada : string): string {
    //console.log(this.campo)
    return this.checaCampo.status(this.pageForm.get(this.dimensao).get(this.dominio).get(this.campo));
  }

}
