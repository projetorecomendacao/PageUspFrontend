import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_cardiovascularFactors } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-cardiovascular-factors',
  templateUrl: './cardiovascular-factors.component.html'
})
export class CardiovascularFactorsComponent implements OnInit {
  @Input() pageForm: FormGroup;

  opcoes = [
    {valor : 'S', descricao: 'Sim'},
    {valor : 'N', descricao: 'Não'}
  ]
  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_cardiovascularFactors;

  constructor() { }

  ngOnInit():void { }

}