import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { LowSocialSupport } from 'src/app/shared/models/social-aspects.model';
import { POSI_lowSocialSupport } from '../constantes/POSI_dominios';
import { EstruturaPage } from '../constantes/estruturaPage';

@Injectable()
export class LowSocialSupportForm{

  private lowSocialSupportForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage: EstruturaPage) { }
  
  geraFormGroup(data?: LowSocialSupport): FormGroup {
    if (data){
      this.lowSocialSupportForm = this.fb.group({
        q55_spouse: [data.q55_spouse,[Validators.required]],
        q55_mother: [data.q55_mother,[Validators.required]],
        q55_father: [data.q55_father,[Validators.required]],
        q55_brothers: [data.q55_brothers,[Validators.required]],
        q55_children: [data.q55_children,[Validators.required]],
        q55_gran_children: [data.q55_gran_children,[Validators.required]],
        q55_great_gran_children: [data.q55_great_gran_children,[Validators.required]],
        q56_meet_family_friends: [data.q56_meet_family_friends,[Validators.required]],
        q57_participate_family_decisions: [data.q57_participate_family_decisions,[Validators.required]],
        q58_satisfied_family_relationship: [data.q58_satisfied_family_relationship,[Validators.required]],
        q59_helped_if_need_money: [data.q59_helped_if_need_money,[Validators.required]],
        q60_someone_helps_if_need: [data.q60_someone_helps_if_need,[Validators.required]],
        q61_someone_to_have_fun: [data.q61_someone_to_have_fun,[Validators.required]],
        q62_participate_social_events: [data.q62_participate_social_events,[Validators.required]],
        q63_regulary_healt_services: [data.q63_regulary_healt_services,[Validators.required]],
        comments: [data.comments],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_lowSocialSupport),[Validators.required]],
        score: [data.score,[Validators.required]],
      });
    }
    else 
    {
      this.lowSocialSupportForm = this.fb.group({
        q55_spouse: ['',[Validators.required]],
        q55_mother: ['',[Validators.required]],
        q55_father: ['',[Validators.required]],
        q55_brothers: ['',[Validators.required]],
        q55_children: ['',[Validators.required]],
        q55_gran_children: ['',[Validators.required]],
        q55_great_gran_children: ['',[Validators.required]],
        q56_meet_family_friends: ['',[Validators.required]],
        q57_participate_family_decisions: ['',[Validators.required]],
        q58_satisfied_family_relationship: ['',[Validators.required]],
        q59_helped_if_need_money: ['',[Validators.required]],
        q60_someone_helps_if_need: ['',[Validators.required]],
        q61_someone_to_have_fun: ['',[Validators.required]],
        q62_participate_social_events: ['',[Validators.required]],
        q63_regulary_healt_services: ['',[Validators.required]],
        comments: [''],
        need_investigation: ['',[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_lowSocialSupport),[Validators.required]],
        score: ['',[Validators.required]],
      });
    }
    return this.lowSocialSupportForm;
  }
}