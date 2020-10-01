import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_sensoryDeficit } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-sensory-deficit',
  templateUrl: './sensory-deficit.component.html'
})
export class SensoryDeficitComponent implements OnInit {

  @Input() pageForm: FormGroup;

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_sensoryDeficit;

  constructor() { }

  ngOnInit():void { }


}