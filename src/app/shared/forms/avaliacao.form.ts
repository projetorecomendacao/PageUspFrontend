import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { UserService } from 'src/app/security/user.service';
import { Avaliacao } from '../models/avaliacao.model';


@Injectable()
export class AvaliacaoForm{

  constructor(private fb: FormBuilder, private userService : UserService) { }
  
  geraFormGroup(data?: Avaliacao): FormGroup {
    let avaliacaoForm : FormGroup
    if (data){
      avaliacaoForm = this.fb.group({
        id : [data.id,[Validators.required]],
        q_01 : [data.q_01,[Validators.required]],
        q_02 : [data.q_02,[Validators.required]],
        q_03 : [data.q_03,[Validators.required]],
        q_04 : [data.q_04,[Validators.required]],
        q_05 : [data.q_05,[Validators.required]],
        q_06 : [data.q_06,[Validators.required]],
        q_07 : [data.q_07,[Validators.required]],
        q_08 : [data.q_08,[Validators.required]],
        q_09 : [data.q_09,[Validators.required]],
        q_10 : [data.q_10,[Validators.required]],
        q_11 : [data.q_11,[Validators.required]],
        q_12 : [data.q_12,[Validators.required]],
        q_13 : [data.q_13,[Validators.required]],
        q_14 : [data.q_14,[Validators.required]],
        q_15 : [data.q_15,[Validators.required]],
        q_16 : [data.q_16,[Validators.required]],
        q_17 : [data.q_17,[Validators.required]],
        q_18 : [data.q_18,[Validators.required]],
        q_19 : [data.q_19,[Validators.required]],
        q_20 : [data.q_20,[Validators.required]],
        q_21 : [data.q_21,[Validators.required]],
        q_22 : [data.q_22,[Validators.required]],
        q_23 : [data.q_23,[Validators.required]],
        q_24 : [data.q_24,[Validators.required]],
        q_25 : [data.q_25,[Validators.required]],
        comments : [data.comments]
       });
    }
    else 
    {
      avaliacaoForm = this.fb.group({
            id : [-1,[Validators.required]],
            q_01 : ['',[Validators.required]],
            q_02 : ['',[Validators.required]],
            q_03 : ['',[Validators.required]],
            q_04 : ['',[Validators.required]],
            q_05 : ['',[Validators.required]],
            q_06 : ['',[Validators.required]],
            q_07 : ['',[Validators.required]],
            q_08 : ['',[Validators.required]],
            q_09 : ['',[Validators.required]],
            q_10 : ['',[Validators.required]],
            q_11 : ['',[Validators.required]],
            q_12 : ['',[Validators.required]],
            q_13 : ['',[Validators.required]],
            q_14 : ['',[Validators.required]],
            q_15 : ['',[Validators.required]],
            q_16 : ['',[Validators.required]],
            q_17 : ['',[Validators.required]],
            q_18 : ['',[Validators.required]],
            q_19 : ['',[Validators.required]],
            q_20 : ['',[Validators.required]],
            q_21 : ['',[Validators.required]],
            q_22 : ['',[Validators.required]],
            q_23 : ['',[Validators.required]],
            q_24 : ['',[Validators.required]],
            q_25 : ['',[Validators.required]],
            comments: ['']
      });
    }
    return avaliacaoForm;
  }
}