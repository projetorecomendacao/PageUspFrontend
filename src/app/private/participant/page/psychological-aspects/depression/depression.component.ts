import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import {POSI_depression} from 'src/app/shared/constantes/POSI_dominios';


@Component({
  selector: 'app-depression',
  templateUrl: './depression.component.html'
})
export class DepressionComponent implements OnInit {
  @Input() pageForm: FormGroup;

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_depression;

  constructor() { }

  ngOnInit():void {}
}
