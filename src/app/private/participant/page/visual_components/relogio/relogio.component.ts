import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html'
})
export class RelogioComponent implements OnInit {

  @Input() pageForm : FormGroup;
  @Input() dominio: string;
  @Input() dimensao: string;
  @Input() campo: string;
  @Input() figura : string;
  
  constructor(private checaCampo: ChecaCampo) { 

  }

  ngOnInit(): void { }

  //para verificar o desenho do campo
  mudou(nada : string): string {
    return this.checaCampo.status(this.pageForm.get(this.dimensao).get(this.dominio).get(this.campo));
  }

}
