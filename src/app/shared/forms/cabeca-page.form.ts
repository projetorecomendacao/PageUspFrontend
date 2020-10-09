import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { Page } from 'src/app/shared/models/page.model';
import { UserService } from 'src/app/security/user.service';


@Injectable()
export class CabecaPageForm{

  private cabecaPageForm: FormGroup;

  get cabecaPage () {return this.cabecaPageForm}
  
  constructor(private fb: FormBuilder, private userService : UserService) { }
  
  geraFormGroup(data?: Page): FormGroup {
    if (data){
      this.cabecaPageForm = this.fb.group({
        service: [data.service,[Validators.required]],
        entrance: [data.entrance,[Validators.required]],
        interviewed: [data.interviewed,[Validators.required]],
        interviewer: [data.interviewer,[Validators.required]],
        avaliation_date: [data.avaliation_date,[Validators.required]],
        start_time: [data.start_time,[Validators.required]],
        end_time: [data.end_time,[Validators.required]],
        //created_at: [data.created_at,[Validators.required]],
        //updated_at: [data.updated_at,[Validators.required]],
       });
    }
    else 
    {
      this.cabecaPageForm= this.fb.group({
        service: ['',[Validators.required]],
        entrance: ['',[Validators.required]],
        interviewed: ['',[Validators.required]],
        interviewer: [this.userService.getName(),[Validators.required]],
        avaliation_date: ['',[Validators.required]],
        start_time: ['',[Validators.required]],
        end_time: ['00',[Validators.required]],
        //created_at: [,[Validators.required]],
        //updated_at: ['',[Validators.required]],
       });
    }
    return this.cabecaPageForm;
  }
}