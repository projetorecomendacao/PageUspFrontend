import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { ParticipantSituation } from 'src/app/shared/models/participant.model';

@Injectable()
export class ParticipantFormForm{

  private participantSituationForm: FormGroup;

  get participantSituation() {return this.participantSituationForm}
  
  constructor(private fb: FormBuilder) { }
  
  geraFormGroup(data?: ParticipantSituation): FormGroup {
    if (data){
      this.participantSituationForm = this.fb.group({
        p02_address: [data.p02_address,[Validators.required]],
        p03_communication: [data.p03_communication,[Validators.required]],
        p07_marital_status: [data.p07_marital_status,[Validators.required]],
        p08_schooling: [data.p08_schooling,[Validators.required]],
        p09_study_time: [data.p09_study_time,[Validators.required]],
        p10_is_retired: [data.p10_is_retired,[Validators.required]],
        p10_actual_profession: [data.p10_actual_profession,[Validators.required]],
        p11_retire_more_time_activity: [data.p11_retire_more_time_activity,[Validators.required]],
        p12_is_working_professionals_activities: [data.p12_is_working_professionals_activities,[Validators.required]],
        p12_professional_activities: [data.p12_professional_activities,[Validators.required]],
        p13_income_I: [data.p13_income_I,[Validators.required]],
        p13_income_F: [data.p13_income_F,[Validators.required]],
        p14_lives_with: [data.p14_lives_with,[Validators.required]],
        p15_has_religion: [data.p15_has_religion,[Validators.required]],
        p15_religion: [data.p15_religion,[Validators.required]],
        p16_health_self_report: [data.p16_health_self_report,[Validators.required]],
        p20_weight: [data.p20_weight,[Validators.required]],
        p20_height: [data.p20_height,[Validators.required]],
        p20_IMC: [data.p20_IMC,[Validators.required]],
        p30_car: [data.p30_car,[Validators.required]],
        p30_bus: [data.p30_bus,[Validators.required]],
        p30_uber: [data.p30_uber,[Validators.required]],
        p30_ride: [data.p30_ride,[Validators.required]],
        p30_ride_with: [data.p30_ride_with,[Validators.required]],
        p31_comments: [data.p31_comments,[Validators.required]],
      });
    }
    else 
    {
      this.participantSituationForm = this.fb.group({
        p02_address: ['',[Validators.required]],
        p03_communication: ['',[Validators.required]],
        p07_marital_status: ['',[Validators.required]],
        p08_schooling: ['',[Validators.required]],
        p09_study_time: ['',[Validators.required]],
        p10_is_retired: ['',[Validators.required]],
        p10_actual_profession: ['',[Validators.required]],
        p11_retire_more_time_activity: ['',[Validators.required]],
        p12_is_working_professionals_activities: ['',[Validators.required]],
        p12_professional_activities: ['',[Validators.required]],
        p13_income_I: ['',[Validators.required]],
        p13_income_F: ['',[Validators.required]],
        p14_lives_with: ['',[Validators.required]],
        p15_has_religion: ['',[Validators.required]],
        p15_religion: ['',[Validators.required]],
        p16_health_self_report: ['',[Validators.required]],
        p20_weight: ['',[Validators.required]],
        p20_height: ['',[Validators.required]],
        p20_IMC: ['',[Validators.required]],
        p30_car: ['',[Validators.required]],
        p30_bus: ['',[Validators.required]],
        p30_uber: ['',[Validators.required]],
        p30_ride: ['',[Validators.required]],
        p30_ride_with: ['',[Validators.required]],
        p31_comments: ['',[Validators.required]],
      });
    }
    return this.participantSituationForm;
  }
}




