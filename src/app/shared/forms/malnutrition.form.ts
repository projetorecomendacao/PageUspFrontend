import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Malnutrition } from 'src/app/shared/models/biological-aspects.model';
import { POSI_malnutrition } from '../constantes/POSI_dominios';
import { EstruturaPage } from '../constantes/estruturaPage';

@Injectable()
export class MalnutritionForm{

  private malnutritionForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage: EstruturaPage) { }
  
  geraFormGroup(data?: Malnutrition): FormGroup {
    if (data){
      this.malnutritionForm = this.fb.group({
        d30_difficulty_chewing: [data.d30_difficulty_chewing,[Validators.required]],
        d31_less3_meal_daily: [data.d31_less3_meal_daily,[Validators.required]],
        d32_decreases_amount_food: [data.d32_decreases_amount_food,[Validators.required]],
        d33_lost_weight_no_reason: [data.d33_lost_weight_no_reason,[Validators.required]],
        d33_lost_weight_no_reason_amount: [data.d33_lost_weight_no_reason_amount,[Validators.required]],
        d34_stress_illness_hospitalization: [data.d34_stress_illness_hospitalization,[Validators.required]],
        q35_bmi_less22: [data.q35_bmi_less22,[Validators.required]],
        comments: [data.comments],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_malnutrition),[Validators.required]],
        score: [data.score,[Validators.required]],
      });
    }
    else 
    {
      this.malnutritionForm = this.fb.group({
        d30_difficulty_chewing: ['',[Validators.required]],
        d31_less3_meal_daily: ['',[Validators.required]],
        d32_decreases_amount_food: ['',[Validators.required]],
        d33_lost_weight_no_reason: ['',[Validators.required]],
        d33_lost_weight_no_reason_amount: ['',[Validators.required]],
        d34_stress_illness_hospitalization: ['',[Validators.required]],
        q35_bmi_less22: ['',[Validators.required]],
        comments: [''],
        need_investigation: ['',[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_malnutrition),[Validators.required]],
        score: ['',[Validators.required]],
      });
    }
    return this.malnutritionForm;
  }
}
