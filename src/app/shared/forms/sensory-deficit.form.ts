import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { SensoryDeficit } from '../models/biological-aspects.model';
import { POSI_sensoryDeficit } from '../constantes/POSI_dominios';
import { EstruturaPage } from '../constantes/estruturaPage';

@Injectable()
export class SensoryDeficitForm {

  private sensoryDeficitForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage : EstruturaPage) { }
  
  geraFormGroup(data?: SensoryDeficit): FormGroup {
    if (data){
      this.sensoryDeficitForm = this.fb.group({
        q20_vision_problems: [data.q20_vision_problems,[Validators.required]],
        q21_hearing_problems: [data.q21_hearing_problems,[Validators.required]],
        q22_taste_problems: [data.q22_taste_problems,[Validators.required]],
        q23_do_activities_problems: [data.q23_do_activities_problems,[Validators.required]],
        comments: [data.comments],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_sensoryDeficit),[Validators.required]],
        score: [data.score,[Validators.required]],
      })
    } else {
      this.sensoryDeficitForm = this.fb.group({
        q20_vision_problems: ['',[Validators.required]],
        q21_hearing_problems: ['',[Validators.required]],
        q22_taste_problems: ['',[Validators.required]],
        q23_do_activities_problems: ['',[Validators.required]],
        comments: [''],
        need_investigation: ['',[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_sensoryDeficit),[Validators.required]],
        score: ['',[Validators.required]],
      });
    }
    return this.sensoryDeficitForm;
  }
}
