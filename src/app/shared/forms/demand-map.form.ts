import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { DemandMap } from '../models/demand-map';



@Injectable()
export class DemandMapForm{

  private demandMapForm: FormGroup;
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: DemandMap): FormGroup {
    if (data){
        this.demandMapForm = this.fb.group({
            dm3_unmet_demands: [data.dm3_unmet_demands, [Validators.required]],
            gerontologist_assessment: [data.gerontologist_assessment,[Validators.required]],
            demands_problems: [data.demands_problems, [Validators.required]],
            goals: [data.goals, [Validators.required]],
            actions_organization: [data.actions_organization],
        });
    }
    else 
    {
        this.demandMapForm = this.fb.group({
            dm3_unmet_demands: ['', [Validators.required]],
            gerontologist_assessment: ['',[Validators.required]],
            demands_problems: ['', [Validators.required]],
            goals: ['', [Validators.required]],
            actions_organization: [''],
        });
    }
    return this.demandMapForm;
  }
}