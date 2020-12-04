import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Depression } from 'src/app/shared/models/psychological-aspects.model';
import { EstruturaPage } from '../constantes/estruturaPage';
import { POSI_depression } from '../constantes/POSI_dominios';


@Injectable()
export class DepressionForm{

  private depressionForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage : EstruturaPage) { }
  
  geraFormGroup(data?: Depression): FormGroup {
    if (data){
      this.depressionForm = this.fb.group({
        q15_satisfied_with_life: [data.q15_satisfied_with_life,[Validators.required]],
        q16_frequently_sad: [data.q16_frequently_sad,[Validators.required]],
        q17_stopped_doing_things: [data.q17_stopped_doing_things,[Validators.required]],
        q18_fear_bad_things_happen: [data.q18_fear_bad_things_happen,[Validators.required]],
        q19_impatient_disquiet: [data.q19_impatient_disquiet,[Validators.required]],
        comments: [data.comments],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_depression),[Validators.required]],
        score: [data.score,[Validators.required]],
      });
    }
    else 
    {
      this.depressionForm = this.fb.group({
        q15_satisfied_with_life: ['',[Validators.required]],
        q16_frequently_sad: ['',[Validators.required]],
        q17_stopped_doing_things: ['',[Validators.required]],
        q18_fear_bad_things_happen: ['',[Validators.required]],
        q19_impatient_disquiet: ['',[Validators.required]],
        comments: [''],
        need_investigation: ['',[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_depression),[Validators.required]],
        score: ['',[Validators.required]],
      });
    }
    return this.depressionForm;
  }
}