import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html'
})
export class QuestoesComponent implements OnInit {

  //todos os inputs..
  @Input() pageForm : FormGroup;
  //número da questão
  @Input() numero: number;

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
    this.texto = `<b class='azul'>${this.numero}.</b> ` + this.checaCampo.questao(this.numero); 
    this.dominio = this.checaCampo.dominio(this.numero);
    this.dimensao = this.checaCampo.dimensao(this.numero);
    this.sim = this.checaCampo.sim(this.numero);
    this.nao = this.checaCampo.nao(this.numero);
    this.campo = this.checaCampo.campo(this.numero);
  }

  //para verificar o desenho do campo
  mudou(nada : string): string {
    return this.checaCampo.status(this.pageForm.get(this.dimensao).get(this.dominio).get(this.campo));
  }

}
