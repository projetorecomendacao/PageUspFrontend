import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { CognitionDeficit } from 'src/app/shared/models/psychological-aspects.model';
import { EstruturaPage } from '../constantes/estruturaPage';
import { POSI_cognitiveDeficit } from '../constantes/POSI_dominios';


@Injectable()
export class CognitiveDeficitForm{

  private cognitiveDeficitForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage : EstruturaPage ) { }
  
  geraFormGroup(data?: CognitionDeficit): FormGroup {
    if (data){
        this.cognitiveDeficitForm = this.fb.group({
          q1_memory_good_like_others: [data.q1_memory_good_like_others,[Validators.required]],
          q2_three_words: [data.q2_three_words,[Validators.required]],
          q3_15: [data.q3_15,[Validators.required]],
          q3_30: [data.q3_30,[Validators.required]],
          q3_45: [data.q3_45,[Validators.required]],
          q3_60: [data.q3_60,[Validators.required]],
          q3_animals: [data.q3_animals,[Validators.required]],
          q4_three_words: [data.q4_three_words,[Validators.required]],
          q5_three_commands: [data.q5_three_commands,[Validators.required]],
          q6_clock: [data.q6_clock,[Validators.required]],
          comments: [data.comments],
          need_investigation: [data.need_investigation,[Validators.required]],
          max_score: [this.estruturaPage.getMax_score(POSI_cognitiveDeficit),[Validators.required]],
          score: [data.score,[Validators.required]],
        });
    }
    else 
    {
        this.cognitiveDeficitForm = this.fb.group({
          q1_memory_good_like_others: ['',[Validators.required]],
          q2_three_words: ['',[Validators.required]],
          q3_15: ['',[Validators.required]],
          q3_30: ['',[Validators.required]],
          q3_45: ['',[Validators.required]],
          q3_60: ['',[Validators.required]],
          q3_animals: ['',[Validators.required]],
          q4_three_words: ['',[Validators.required]],
          q5_three_commands: ['',[Validators.required]],
          q6_clock: ['',[Validators.required]],
          comments: [''],
          need_investigation: ['',[Validators.required]],
          max_score: [this.estruturaPage.getMax_score(POSI_cognitiveDeficit),[Validators.required]],
          score: ['',[Validators.required]],
        });
    }
    return this.cognitiveDeficitForm;
  }
}
