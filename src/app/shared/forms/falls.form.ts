import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Falls } from 'src/app/shared/models/multidimentional-aspects';
import { POSI_falls } from '../constantes/POSI_dominios';
import { EstruturaPage } from '../constantes/estruturaPage';

@Injectable()
export class FallsForm{

  private fallsForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage : EstruturaPage) { }
  
  geraFormGroup(data?: Falls): FormGroup {
    if (data){
      this.fallsForm = this.fb.group({
        q88_falls_last_year: [data.q88_falls_last_year,[Validators.required]],
        q88_amount_falls_last_year: [data.q88_amount_falls_last_year,[Validators.required]],
        q89_fractures_due_to_falls: [data.q89_fractures_due_to_falls,[Validators.required]],
        q89_fractures_due_to_falls_list: [data.q89_fractures_due_to_falls_list,[Validators.required]],
        q90_falls_activity: [data.q90_falls_activity,[Validators.required]],
        q91_strength_mmii: [data.q91_strength_mmii,[Validators.required]],
        q92_equilibrium: [data.q92_equilibrium,[Validators.required]],
        q93_walking_aid_device: [data.q93_walking_aid_device,[Validators.required]],
        q94_older_than75: [data.q94_older_than75,[Validators.required]],
        q95_female: [data.q95_female,[Validators.required]],
        q96_cognitive_alterations: [data.q96_cognitive_alterations,[Validators.required]],
        q97_av_ds_commitment: [data.q97_av_ds_commitment,[Validators.required]],
        q98_visual_deficit: [data.q98_visual_deficit,[Validators.required]],
        q99_domestic_risks: [data.q99_domestic_risks,[Validators.required]],
        q100_behavior_risk: [data.q100_behavior_risk,[Validators.required]],
        q101_inactivity: [data.q101_inactivity,[Validators.required]],
        q102_prior_ave: [data.q102_prior_ave,[Validators.required]],
        q103_psychotropic_medications_use: [data.q103_psychotropic_medications_use,[Validators.required]],
        q104_has_diseases: [data.q104_has_diseases,[Validators.required]],
        comments: [data.comments],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_falls),[Validators.required]],
        score: [data.score,[Validators.required]],
      });
    }
    else 
    {
      this.fallsForm = this.fb.group({
        q88_falls_last_year: ['',[Validators.required]],
        q88_amount_falls_last_year: ['',[Validators.required]],
        q89_fractures_due_to_falls: ['',[Validators.required]],
        q89_fractures_due_to_falls_list: ['',[Validators.required]],
        q90_falls_activity: ['',[Validators.required]],
        q91_strength_mmii: ['',[Validators.required]],
        q92_equilibrium: ['',[Validators.required]],
        q93_walking_aid_device: ['',[Validators.required]],
        q94_older_than75: ['',[Validators.required]],
        q95_female: ['',[Validators.required]],
        q96_cognitive_alterations: ['',[Validators.required]],
        q97_av_ds_commitment: ['',[Validators.required]],
        q98_visual_deficit: ['',[Validators.required]],
        q99_domestic_risks: ['',[Validators.required]],
        q100_behavior_risk: ['',[Validators.required]],
        q101_inactivity: ['',[Validators.required]],
        q102_prior_ave: ['',[Validators.required]],
        q103_psychotropic_medications_use: ['',[Validators.required]],
        q104_has_diseases: ['',[Validators.required]],
        comments: [''],
        need_investigation: ['',[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_falls),[Validators.required]],
        score: ['',[Validators.required]],
      });
    }
    return this.fallsForm;
  }
}