import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { NegativeAttitudesAging } from 'src/app/shared/models/psychological-aspects.model';
import { POSI_negativeAttitudesAging } from '../constantes/POSI_dominios';
import { EstruturaPage } from '../constantes/estruturaPage';

@Injectable()
export class NegativeAttitudesAgingForm{

  private negativeAttitudesAgingForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage : EstruturaPage) { }
  
  geraFormGroup(data?: NegativeAttitudesAging): FormGroup {
    if (data){
      this.negativeAttitudesAgingForm = this.fb.group({
        q7_age_self_perception: [data.q7_age_self_perception,[Validators.required]],
        q7_age_self_perception_why: [data.q7_age_self_perception_why,[Validators.required]],
        q7_age_self_perception_analyze: [data.q7_age_self_perception_analyze,[Validators.required]],
        q8_good_health: [data.q8_good_health,[Validators.required]],
        q9_more_neg_pos: [data.q9_more_neg_pos,[Validators.required]],
        q10_worried: [data.q10_worried,[Validators.required]],
        q11_sex_life: [data.q11_sex_life,[Validators.required]],
        q12_little_to_do: [data.q12_little_to_do,[Validators.required]],
        q13_physical_weakness: [data.q13_physical_weakness,[Validators.required]],
        q14_better_die: [data.q14_better_die,[Validators.required]],
        comments: [data.comments],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_negativeAttitudesAging),[Validators.required]],
        score: [data.score,[Validators.required]],
      });
    }
    else 
    {
      this.negativeAttitudesAgingForm = this.fb.group({
        q7_age_self_perception: ['',[Validators.required]],
        q7_age_self_perception_why: ['',[Validators.required]],
        q7_age_self_perception_analyze: ['',[Validators.required]],
        q8_good_health: ['',[Validators.required]],
        q9_more_neg_pos: ['',[Validators.required]],
        q10_worried: ['',[Validators.required]],
        q11_sex_life: ['',[Validators.required]],
        q12_little_to_do: ['',[Validators.required]],
        q13_physical_weakness: ['',[Validators.required]],
        q14_better_die: ['',[Validators.required]],
        comments: [''],
        need_investigation: ['',[Validators.required]],
        max_score_negative: [this.estruturaPage.getMax_score(POSI_negativeAttitudesAging),[Validators.required]],
        score: ['',[Validators.required]],
      });
    }
    return this.negativeAttitudesAgingForm;
  }
}
