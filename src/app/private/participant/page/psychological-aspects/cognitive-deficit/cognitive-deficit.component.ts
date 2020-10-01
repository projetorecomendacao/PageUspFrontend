import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_cognitiveDeficit } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-cognitive-deficit',
  templateUrl: './cognitive-deficit.component.html'
})
export class CognitiveDeficitComponent implements OnInit {

  @Input() pageForm: FormGroup;

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_cognitiveDeficit;

  constructor() { }

  ngOnInit():void {}

}
