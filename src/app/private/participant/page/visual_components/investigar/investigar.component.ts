import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/checa-campo';

@Component({
  selector: 'app-investigar',
  templateUrl: './investigar.component.html'
})
export class InvestigarComponent implements OnInit {

  @Input() pageForm : FormGroup;
  @Input() dominio: string;
  @Input() dimensao: string;
  @Input() campo: string;
  
  constructor(private checaCampo: ChecaCampo) {  }

  ngOnInit(): void { }

  //para verificar o desenho do campo
  mudou(nada : string): string {
      return this.checaCampo.status(this.pageForm.get(this.dimensao).get(this.dominio).get(this.campo));
  }

}
