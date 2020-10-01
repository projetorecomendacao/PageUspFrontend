import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from '../../services/checa-campo';

@Component({
  selector: 'app-ler-select',
  templateUrl: './ler-select.component.html'
})
export class LerSelectComponent implements OnInit {

  //todos os inputs..
  @Input() pageForm : FormGroup;
  //número da questão
  @Input() campo: string;
  //posicão domínio
  @Input() posicaoDominio : number;
  //Vetor com as opções do select
  @Input() opcoes : any[];

  //variáveis de apoio
  dominio: string;
  dimensao: string;

  
  constructor(private checaCampo: ChecaCampo) { 

  }

  ngOnInit(): void {

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
