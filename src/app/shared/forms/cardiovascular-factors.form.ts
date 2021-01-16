import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { CardiovascularFactors } from 'src/app/shared/models/biological-aspects.model';
import { EstruturaPage } from '../constantes/estruturaPage';
import { POSI_cardiovascularFactors } from '../constantes/POSI_dominios';


@Injectable()
export class CardiovascularFactorsForm{

  private cardiovascularFactorsForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage: EstruturaPage) { }
  
  geraFormGroup(data?: CardiovascularFactors): FormGroup {
      if (data){
        this.cardiovascularFactorsForm = this.fb.group({
          q36_dcv_familiar_history: [data.q36_dcv_familiar_history,[Validators.required]],
          q37_hypertension: [data.q37_hypertension,[Validators.required]],
          q37_hypertension_unknow: [data.q37_hypertension_unknow],
          q38_uncontrolled_diabetes: [data.q38_uncontrolled_diabetes,[Validators.required]],
          q38_uncontrolled_diabetes_unknow: [data.q38_uncontrolled_diabetes_unknow],
          q39_cholesterol: [data.q39_cholesterol,[Validators.required]],
          q39_cholesterol_unknow: [data.q39_cholesterol_unknow],
          q40_smoker: [data.q40_smoker,[Validators.required]],
          q41_drink_type: [data.q41_drink_type,[Validators.required,Validators.maxLength(50)]],
          q41_alcohol_Ingested_last_week_amount: [data.q41_alcohol_Ingested_last_week_amount,[Validators.required]],
          q41_alcohol_Ingested_last_week: [data.q41_alcohol_Ingested_last_week,[Validators.required]],
          q42_practice_exercises_regularly: [data.q42_practice_exercises_regularly,[Validators.required]],
          q42_practise_exercises_frequency: [data.q42_practise_exercises_frequency,[Validators.required,Validators.maxLength(60)]],
          q42_practise_exercises_time: [data.q42_practise_exercises_time,[Validators.required,Validators.maxLength(60)]],
          q42_practice_exercises: [data.q42_practice_exercises,[Validators.required]],
          q43_bmi_obesity: [data.q43_bmi_obesity,[Validators.required]],
          comments: [data.comments],
          need_investigation: [data.need_investigation,[Validators.required]],
          max_score: [this.estruturaPage.getMax_score(POSI_cardiovascularFactors),[Validators.required]],
          score: [data.score,[Validators.required]],});
      }
      else 
      {
        this.cardiovascularFactorsForm = this.fb.group({
          q36_dcv_familiar_history: ['',[Validators.required]],
          q37_hypertension: ['',[Validators.required]],
          q37_hypertension_unknow: [''],
          q38_uncontrolled_diabetes: ['',[Validators.required]],
          q38_uncontrolled_diabetes_unknow: [''],
          q39_cholesterol: ['',[Validators.required]],
          q39_cholesterol_unknow: [''],
          q40_smoker: ['',[Validators.required]],
          q41_drink_type: ['',[Validators.required,Validators.maxLength(50)]],
          q41_alcohol_Ingested_last_week_amount: ['',[Validators.required]],
          q41_alcohol_Ingested_last_week: ['',[Validators.required]],
          q42_practice_exercises_regularly: ['',[Validators.required]],
          q42_practise_exercises_frequency: ['',[Validators.required,Validators.maxLength(50)]],
          q42_practise_exercises_time: ['',[Validators.required,Validators.maxLength(50)]],
          q42_practice_exercises: ['',[Validators.required]],
          q43_bmi_obesity: ['',[Validators.required]],
          comments: [''],
          need_investigation: ['',[Validators.required]],
          max_score: [this.estruturaPage.getMax_score(POSI_cardiovascularFactors),[Validators.required]],
          score: ['',[Validators.required]],
        });
      }
    return this.cardiovascularFactorsForm;
  }
}