import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_violence } from 'src/app/shared/constantes/POSI_dominios';


@Component({
  selector: 'app-violence',
  templateUrl: './violence.component.html'
})
export class ViolenceComponent implements OnInit {
  @Input() pageForm: FormGroup;

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_violence;

  constructor() { }

  ngOnInit():void {}

}


