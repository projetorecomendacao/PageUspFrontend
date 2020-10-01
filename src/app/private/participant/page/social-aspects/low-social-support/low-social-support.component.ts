import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_lowSocialSupport } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-low-social-support',
  templateUrl: './low-social-support.component.html'
})
export class LowSocialSupportComponent implements OnInit {
  
  @Input() pageForm: FormGroup;

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_lowSocialSupport;

  opcoes = [
    {valor : 'S', descricao: 'Sim'},
    {valor : 'N', descricao: 'Não'}
  ]

  constructor() { }

  ngOnInit():void {}

}