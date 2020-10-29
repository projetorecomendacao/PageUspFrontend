import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Participant } from '../models/participant.model';

@Injectable()
export class ParticipantForm{

  private participantForm: FormGroup;

  get participant() {return this.participantForm}
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: Participant): FormGroup {
    if (data){
      this.participantForm = this.fb.group({
        p00_email: [data.p00_email, Validators.required],
        p01_name: [data.p01_name, Validators.required],
        p01_name_social: [data.p01_name_social],
        p02_address: [data.p02_address, Validators.required],
        p03_communication: [data.p03_communication, Validators.required],
        p04_birth_date: [data.p04_birth_date, Validators.required],
        p05_age: [data.p05_age, [Validators.required,Validators.max(120),Validators.min(18)]],
        p06_gender: [data.p06_gender, Validators.required],
        p20_profile_photo_URL: [data.p20_profile_photo_URL]
      });
    }
    else 
    {
      this.participantForm = this.fb.group({
        p00_email: ['', Validators.required],
        p01_name: ['', Validators.required],
        p01_name_social: [''],
        p02_address: ['', Validators.required],
        p03_communication: ['', Validators.required],
        p04_birth_date: ['', Validators.required],
        p05_age: ['', [Validators.required,Validators.max(120),Validators.min(18)]],
        p06_gender: ['', Validators.required],
        p20_profile_photo_URL: [null]
      });
    }
    return this.participantForm;
  }
}