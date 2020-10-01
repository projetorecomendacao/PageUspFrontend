import { Component,  Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import { POSI_negativeAttitudesAging } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-negative-attitudes-aging',
  templateUrl: './negative-attitudes-aging.component.html'
})
export class NegativeAttitudesAgingComponent implements OnInit {
  @Input() pageForm: FormGroup;

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_negativeAttitudesAging;

  constructor() { }

  ngOnInit():void {}
}


