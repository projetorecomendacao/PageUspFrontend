import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_cardiovascularFactors } from 'src/app/shared/constantes/POSI_dominios';

@Component({
  selector: 'app-cardiovascular-factors',
  templateUrl: './cardiovascular-factors.component.html'
})
export class CardiovascularFactorsComponent implements OnInit {
  @Input() pageForm: FormGroup;

  //Indica a questão que não será editável
  q_43 = true;

  opcoes = [
    {valor : 'S', descricao: 'Sim'},
    {valor : 'N', descricao: 'Não'}
  ]
  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_cardiovascularFactors;

  constructor() { }

  ngOnInit():void { 
    if (this.pageForm.get('participantFormForm').get('p20_IMC').value >= 27){
      this.pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('q43_bmi_obesity').setValue('S');
    } else {
      this.pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('q43_bmi_obesity').setValue('N');      
    }

  }

}