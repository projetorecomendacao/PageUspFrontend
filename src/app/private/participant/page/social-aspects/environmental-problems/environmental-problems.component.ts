import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_environmentalProblems } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-environmental-problems',
  templateUrl: './environmental-problems.component.html'
})
export class EnvironmentalProblemsComponent implements OnInit {

  @Input() pageForm: FormGroup;
  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_environmentalProblems;

  constructor() { }

  ngOnInit():void {}

  q_76():boolean{
    if (this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('q76_stairs').value == 'N') {
      this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('q77_lighted_stairs').setValue('S');
      this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('q78_handrail_on_stairs').setValue('S');
      return true;
    }
    return false;
  }

 }