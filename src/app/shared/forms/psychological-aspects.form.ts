import {FormGroup} from '@angular/forms';
import { Injectable } from '@angular/core';
import { CognitiveDeficitForm } from './cognitive-deficit.form';
import { DepressionForm } from './depression.form';
import { NegativeAttitudesAgingForm } from './negative-attitudes-aging.form';
import { ObservationsPsychologicalForm } from './observations-psychological.form';
import { PsychologicalAspects } from 'src/app/shared/models/psychological-aspects.model';

@Injectable()
export class PsychologicalAspectsForm{

  private psychologicalAspectsForm: FormGroup;
  
  constructor(private cognitiveDeficitForm: CognitiveDeficitForm,
              private depressionForm: DepressionForm,
              private negativeAttitudesAgingForm: NegativeAttitudesAgingForm,
              private comments: ObservationsPsychologicalForm) { }
  
  geraFormGroup(data?: PsychologicalAspects): FormGroup {
    if (data){ 
      this.psychologicalAspectsForm = new FormGroup({
      'cognitiveDeficitForm' : this.cognitiveDeficitForm.geraFormGroup(data.cognition_deficit_instance),
      'depressionForm' : this.depressionForm.geraFormGroup(data.depression_instance),
      'negativeAttitudesAgingForm' : this.negativeAttitudesAgingForm.geraFormGroup(data.negative_attitudes_aging_instance),
      'commentsForm' : this.comments.geraFormGroup(data.comments)});
    }
    else 
    {
      this.psychologicalAspectsForm = new FormGroup({
        'cognitiveDeficitForm' : this.cognitiveDeficitForm.geraFormGroup(),
        'depressionForm' : this.depressionForm.geraFormGroup(),
        'negativeAttitudesAgingForm' : this.negativeAttitudesAgingForm.geraFormGroup(),
        'commentsForm' : this.comments.geraFormGroup()  });
    }
    return this.psychologicalAspectsForm;
  }
}













