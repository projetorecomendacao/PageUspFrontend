import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';
import { Participant } from 'src/app/shared/models/participant.model';
import { POSI_falls } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-falls',
  templateUrl: './falls.component.html'
})
export class FallsComponent implements OnInit {

  @Input() pageForm: FormGroup;
  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_falls;

  constructor() { }

  ngOnInit():void {}

}

