import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Orientando } from '../models/orientandos';

@Injectable()
export class OrientadorForm{

  private orientadorForm: FormGroup;


  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: Orientando): FormGroup {
    if (data){
      this.orientadorForm = this.fb.group({
        orientador: [data.orientador, Validators.required],
        orientando_id: [data.orientando_id, Validators.required],
        orientando_name: [data.orientando_name, Validators.required],
        orientando_email: [data.orientando_email, Validators.required],
        dupla_name: [data.dupla_name],
        dupla_email: [data.dupla_email],
        trio_name: [data.trio_name]
      });
    }
    else 
    {
      this.orientadorForm = this.fb.group({
        orientador: [1, Validators.required],
        orientando_id: [1, Validators.required],
        orientando_name: ['', Validators.required],
        orientando_email: ['', Validators.required],
        dupla_name: [''],
        dupla_email: [''],
        trio_name: ['']
      });
    }
    return this.orientadorForm;
  }
}