import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { FunctionalDisability } from 'src/app/shared/models/biological-aspects.model';
import { POSI_functionalDisability } from '../constantes/POSI_dominios';
import { EstruturaPage } from '../constantes/estruturaPage';

@Injectable()
export class FunctionalDisabilityForm{

  private functionalDisabilityForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage : EstruturaPage) { }
  
  geraFormGroup(data?: FunctionalDisability): FormGroup {
    if (data){
      this.functionalDisabilityForm = this.fb.group({
        q24_to_shop: [data.q24_to_shop,[Validators.required]],
        q25_use_transport: [data.q25_use_transport,[Validators.required]],
        q26_to_cook: [data.q26_to_cook,[Validators.required]],
        q27_UseTelephone: [data.q27UseTelephone,[Validators.required]],
        q28_dress_up: [data.q28_dress_up,[Validators.required]],
        q29_TakeShower: [data.q29TakeShower,[Validators.required]],
        comments: [data.comments,[Validators.required]],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_functionalDisability),[Validators.required]],
        score: [data.score,[Validators.required]],
      });

    }
    else 
    {
      this.functionalDisabilityForm = this.fb.group({
        q24_to_shop: ['',[Validators.required]],
        q25_use_transport: ['',[Validators.required]],
        q26_to_cook: ['',[Validators.required]],
        q27_UseTelephone: ['',[Validators.required]],
        q28_dress_up: ['',[Validators.required]],
        q29_TakeShower: ['',[Validators.required]],
        comments: ['',[Validators.required]],
        need_investigation: ['',[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_functionalDisability),[Validators.required]],
        score: ['',[Validators.required]],
      });
    }
    return this.functionalDisabilityForm;
  }
}