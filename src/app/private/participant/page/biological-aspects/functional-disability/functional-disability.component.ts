import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_functionalDisability } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-functional-disability',
  templateUrl: './functional-disability.component.html'
})
export class FunctionalDisabilityComponent implements OnInit {

  @Input() pageForm: FormGroup;

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_functionalDisability;

  constructor() { }

  ngOnInit():void {}
}