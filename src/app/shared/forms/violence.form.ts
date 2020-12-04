import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { POSI_violence } from '../constantes/POSI_dominios';
import { EstruturaPage } from '../constantes/estruturaPage';

@Injectable()
export class ViolenceForm {

  private violenceForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage : EstruturaPage) { }
  
  geraFormGroup(data?: any): FormGroup {
    if (data){
      this.violenceForm = this.fb.group({
        q64_afraid_close_person: [data.q64_afraid_close_person,[Validators.required]],
        q65_feels_abandoned: [data.q65_feels_abandoned,[Validators.required]],
        q66_forced: [data.q66_forced,[Validators.required]],
        q67_assauteld: [data.q67_assauteld,[Validators.required]],
        q68_in_need: [data.q68_in_need,[Validators.required]],
        q69_someone_used_money: [data.q69_someone_used_money,[Validators.required]],
        q70_touched_without_permission: [data.q70_touched_without_permission,[Validators.required]],
        q71_dont_take_care_health: [data.q71_dont_take_care_health,[Validators.required]],
        comments: [data.comments],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_violence),[Validators.required]],
        score: [data.score,[Validators.required]],
      });
    }
    else 
    {
      this.violenceForm = this.fb.group({
        q64_afraid_close_person: ['',[Validators.required]],
        q65_feels_abandoned: ['',[Validators.required]],
        q66_forced: ['',[Validators.required]],
        q67_assauteld: ['',[Validators.required]],
        q68_in_need: ['',[Validators.required]],
        q69_someone_used_money: ['',[Validators.required]],
        q70_touched_without_permission: ['',[Validators.required]],
        q71_dont_take_care_health: ['',[Validators.required]],
        comments: [''],
        need_investigation: ['',[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_violence),[Validators.required]],
        score: ['',[Validators.required]],
      });
    }
    return this.violenceForm;
  }
}