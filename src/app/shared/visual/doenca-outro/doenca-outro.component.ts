import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { POSI_misuseMedications } from '../../constantes/POSI_dominios';
import { ChecaCampo } from '../../services/checa-campo';

@Component({
  selector: 'app-doenca-outro',
  templateUrl: './doenca-outro.component.html'
})
export class DoencaOutroComponent implements OnInit {

  @ Input() pageForm: FormGroup;
  
  @ Input() letra: string;
  @ Input() campoOutro: string;
  @ Input() campo: string;
  
  //posicão domínio
  posicaoDominio : number = POSI_misuseMedications;
  

  dominio: string;
  dimensao: string;
  
  
  constructor(private checaCampo : ChecaCampo) {

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
