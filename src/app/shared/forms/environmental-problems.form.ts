import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { EnvironmentalProblems } from 'src/app/shared/models/social-aspects.model';
import { POSI_environmentalProblems } from '../constantes/POSI_dominios';
import { EstruturaPage } from '../constantes/estruturaPage';

@Injectable()
export class EnvironmentalProblemsForm{

  private environmentalProblemsForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage : EstruturaPage) { }
  
  geraFormGroup(data?: EnvironmentalProblems): FormGroup {
    if (data){
      this.environmentalProblemsForm = this.fb.group({
        q72_estable_furniture: [data.q72_estable_furniture,[Validators.required]],
        q73_loose_objects_carpets: [data.q73_loose_objects_carpets,[Validators.required]],
        q74_slippery_floor: [data.q74_slippery_floor,[Validators.required]],
        q75_non_slippery_carpet: [data.q75_non_slippery_carpet,[Validators.required]],
        q76_stairs: [data.q76_stairs,[Validators.required]],
        q77_lighted_stairs: [data.q77_lighted_stairs,[Validators.required]],
        q78_handrail_on_stairs: [data.q78_handrail_on_stairs,[Validators.required]],
        
        q79_get_on_stool: [data.q79_get_on_stool,[Validators.required]],
        q80_turn_lights_on: [data.q80_turn_lights_on,[Validators.required]],
        q81_safe_shoes: [data.q81_safe_shoes,[Validators.required]],
        
        q82_manicure_sidewalks: [data.q82_manicure_sidewalks,[Validators.required]],
        q83_public_transport_access: [data.q83_public_transport_access,[Validators.required]],
        q84_commerce_access: [data.q84_commerce_access,[Validators.required]],
        q85_ease_plasewalking: [data.q85_ease_plasewalking,[Validators.required]],
        q86_fun_access: [data.q86_fun_access,[Validators.required]],
        q87_safety: [data.q87_safety,[Validators.required]],
        comments: [data.comments],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_environmentalProblems),[Validators.required]],
        score: [data.score,[Validators.required]],
        behaviorRisk:[''],
        domesticRisk:['']
      });
    }
    else 
    {
      this.environmentalProblemsForm = this.fb.group({
        q72_estable_furniture: ['',[Validators.required]],
        q73_loose_objects_carpets: ['',[Validators.required]],
        q74_slippery_floor: ['',[Validators.required]],
        q75_non_slippery_carpet: ['',[Validators.required]],
        q76_stairs: ['',[Validators.required]],
        q77_lighted_stairs: ['',[Validators.required]],
        q78_handrail_on_stairs: ['',[Validators.required]],
        
        q79_get_on_stool: ['',[Validators.required]],
        q80_turn_lights_on: ['',[Validators.required]],
        q81_safe_shoes: ['',[Validators.required]],
        
        q82_manicure_sidewalks: ['',[Validators.required]],
        q83_public_transport_access: ['',[Validators.required]],
        q84_commerce_access: ['',[Validators.required]],
        q85_ease_plasewalking: ['',[Validators.required]],
        q86_fun_access: ['',[Validators.required]],
        q87_safety: ['',[Validators.required]],
        comments: [''],
        need_investigation: ['',[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_environmentalProblems),[Validators.required]],
        score: ['',[Validators.required]],
        behaviorRisk:[''],
        domesticRisk:['']
      });

    }
    return this.environmentalProblemsForm;
  }
}



