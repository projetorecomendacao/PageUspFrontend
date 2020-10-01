import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_misuseMedications } from 'src/app/shared/constantes/POSI_dominios';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';


@Component({
  selector: 'app-misuse-medications',
  templateUrl: './misuse-medications.component.html'
})
export class MisuseMedicationsComponent implements OnInit {

  @Input() pageForm: FormGroup;

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_misuseMedications;

    //Lista de doenças
    public doencas = [
      {letra: 'a', questao: 'Doença do coração (angina, infarto ou ataque cardíaco)?', campo: 'q44_diseases_last_5_years_a'}, 
      {letra: 'b', questao: 'Pressão alta/ hipertensão?', campo: 'q44_diseases_last_5_years_b'},
      {letra: 'c', questao: 'Derrame/AVC/Isquemia?', campo: 'q44_diseases_last_5_years_c'},
      {letra: 'd', questao: 'Diabetes Mellitus?', campo: 'q44_diseases_last_5_years_d'}, 
      {letra: 'e', questao: 'Tumor maligno/ Câncer?', campo: 'q44_diseases_last_5_years_e'},
      {letra: 'f', questao: 'Asma/Bronquite/Enfisema?', campo: 'q44_diseases_last_5_years_f'},
      {letra: 'g', questao: 'Osteoporose?', campo: 'q44_diseases_last_5_years_g'},
      {letra: 'h', questao: 'Reumatismo?', campo: 'q44_diseases_last_5_years_h'},
      {letra: 'i', questao: 'Tendinite?', campo: 'q44_diseases_last_5_years_i'},
      {letra: 'j', questao: 'Problemas de circulação?', campo: 'q44_diseases_last_5_years_j'},
      {letra: 'k', questao: 'Depressão?', campo: 'q44_diseases_last_5_years_k'} 
      ];
  
    public problemas = [
      {letra: 'a',  questao: ' Dor de cabeça? ',  campo:  'q45_health_problems_a'},
      {letra: 'b',  questao: ' Dor nas costas ou em outra parte do corpo?',  campo:  'q45_health_problems_b'},
      {letra: 'c',  questao: ' Alergia? ',  campo:  'q45_health_problems_c'},
      {letra: 'd',  questao: ' Problema emocional? ',  campo:  'q45_health_problems_d'},
      {letra: 'e',  questao: ' Tontura? ',  campo:  'q45_health_problems_e'},
      {letra: 'f',  questao: ' Dificuldades para dormir? ',  campo:  'q45_health_problems_f'},
      {letra: 'g',  questao: ' Incontinência urinária/perda de urina ',  campo:  'q45_health_problems_g'},
    ];
      

  constructor() { }

  ngOnInit():void { }

}