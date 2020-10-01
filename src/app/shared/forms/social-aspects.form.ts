import {FormGroup, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { EnvironmentalProblemsForm } from './environmental-problems.form';
import { LowSocialSupportForm } from './low-social-support.form';
import { ViolenceForm } from './violence.form';
import { ObservationsSocialForm } from './observations-social.form';
import { SocialAspects } from 'src/app/shared/models/social-aspects.model';

@Injectable()
export class SocialAspectsForm {

  private socialAspectsForm: FormGroup;
  
  constructor(private environmentalProblemsForm: EnvironmentalProblemsForm,
              private lowSocialSupportForm : LowSocialSupportForm,
              private violenceForm : ViolenceForm,
              private commentsForm: ObservationsSocialForm) { }
  
  geraFormGroup(data?: SocialAspects): FormGroup {
    if (data){
      this.socialAspectsForm = new FormGroup ({
        'environmentalProblemsForm': this.environmentalProblemsForm.geraFormGroup(data.environmentalProblems_instance),
        'lowSocialSupportForm' : this.lowSocialSupportForm.geraFormGroup(data.lowSocialSupport_instance),
        'violenceForm' : this.violenceForm.geraFormGroup(data.violence_instance),
        'commentsForm': this.commentsForm.geraFormGroup(data.comments)
      })
    }
    else 
    {
      this.socialAspectsForm = new FormGroup ({
        'environmentalProblemsForm': this.environmentalProblemsForm.geraFormGroup(),
        'lowSocialSupportForm' : this.lowSocialSupportForm.geraFormGroup(),
        'violenceForm' : this.violenceForm.geraFormGroup(),
        'commentsForm': this.commentsForm.geraFormGroup()
      })
    }
    return this.socialAspectsForm;
  }
}
