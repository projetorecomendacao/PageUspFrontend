import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html'
})
export class RelogioComponent implements OnInit {

  @Input() pageForm : FormGroup;
  //Posicao do dominio na estrutura do PAGe
  @Input() posicaoDominio : number;
  @Input() campo: string;
  @Input() figura : string;

  dominio: string;
  dimensao: string;
  
  constructor(private checaCampo: ChecaCampo) { 

  }

  ngOnInit(): void { 
    this.dominio = this.checaCampo.getDominio(this.posicaoDominio);
    this.dimensao = this.checaCampo.getDimensao(this.posicaoDominio);
  }

  //para verificar o desenho do campo
  mudou(nada : string): string {
    return this.checaCampo.status(this.pageForm.get(this.dimensao).get(this.dominio).get(this.campo));
  }

}
