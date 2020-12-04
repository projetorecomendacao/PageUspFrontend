import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_malnutrition } from 'src/app/shared/constantes/POSI_dominios';


@Component({
  selector: 'app-malnutrition',
  templateUrl: './malnutrition.component.html'
})

export class MalnutritionComponent implements OnInit {
  @Input() pageForm: FormGroup;

  peso = 0
  altura = 0
  imc = 0

  //opções para os campos 
  opcoes = [
    {valor : "nda", descricao : "Não perdeu peso"},
    {valor : "Mais de 3 KG", descricao : "Mais de 3 KG"},
    {valor : "De 1 a 3 KG", descricao : "De 1 a 3 KG"},
    {valor : "Não sabe Informar", descricao : "Não sabe Informar"}
  ]

  //Indica a questão que não será editável
  q_35 = true;

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_malnutrition;



  constructor() {}

  ngOnInit():void {
    //Seta o valor do campo do imc menor que 22 para desnutrição
    if (this.pageForm.get('participantFormForm').get('p20_IMC').value <= 22){
      this.pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('q35_bmi_less22').setValue('S');
    } else {
      this.pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('q35_bmi_less22').setValue('N');      
    }
    this.peso = this.pageForm.get('participantFormForm').get('p20_weight').value
    this.altura = this.pageForm.get('participantFormForm').get('p20_height').value
    this.imc = this.pageForm.get('participantFormForm').get('p20_IMC').value
  }  
 

}