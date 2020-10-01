import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {
  @Input() pageForm : FormGroup;
  @Input() posicaoDominio : number;
  
  dominio : string;
  dimensao : string;
  campo : string;

  constructor(private checaCampo: ChecaCampo) { }

  ngOnInit(): void {
    this.dominio = this.checaCampo.getDominio(this.posicaoDominio);
    this.dimensao = this.checaCampo.getDimensao(this.posicaoDominio);
    this.campo = this.checaCampo.getCampoComentario(this.posicaoDominio);
  }

  //para verificar o desenho do campo
  mudou(nada : string): string {
    return this.checaCampo.status(this.pageForm.get(this.dimensao).get(this.dominio).get(this.campo));
  }
}
