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
        p10_actual_profession: [data.p10_actual_profession],
        p11_retire_more_time_activity: [data.p11_retire_more_time_activity],
        p12_is_working_professionals_activities: [data.p12_is_working_professionals_activities,[Validators.required]],
        p12_professional_activities: [data.p12_professional_activities],
        p13_income_I: [data.p13_income_I,[Validators.required]],
        p13_income_F: [data.p13_income_F,[Validators.required]],
        p14_lives_with: [data.p14_lives_with,[Validators.required]],
        p15_has_religion: [data.p15_has_religion,[Validators.required]],
        p15_religion: [data.p15_religion],
        p16_health_self_report: [data.p16_health_self_report],
        p20_weight: [data.p20_weight,[Validators.required]],
        p20_height: [data.p20_height,[Validators.required]],
        p20_IMC: [data.p20_IMC,[Validators.required]],
        //O campo 30 foi desligado no PageUsp
        p30_car: ['N',[Validators.required]],
        p30_bus: ['N',[Validators.required]],
        p30_uber: ['N',[Validators.required]],
        p30_ride: ['N',[Validators.required]],
        p30_ride_with: ['N',[Validators.required]],
        p31_comments: [data.p31_comments],
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
        p10_actual_profession: [''],
        p11_retire_more_time_activity: [''],
        p12_is_working_professionals_activities: ['',[Validators.required]],
        p12_professional_activities: [''],
        p13_income_I: ['',[Validators.required]],
        p13_income_F: ['',[Validators.required]],
        p14_lives_with: ['',[Validators.required]],
        p15_has_religion: ['',[Validators.required]],
        p15_religion: [''],
        p16_health_self_report: [''],
        //Os campos peso e altura são lidos no domínio desnutrição
        p20_weight: [1,[Validators.required]],
        p20_height: [1,[Validators.required]],
        p20_IMC: [1,[Validators.required]],
        //O campo 30 foi desligado no PageUsp
        p30_car: ['N',[Validators.required]],
        p30_bus: ['N',[Validators.required]],
        p30_uber: ['N',[Validators.required]],
        p30_ride: ['N',[Validators.required]],
        p30_ride_with: ['N',[Validators.required]],
        p31_comments: [''],
      });
    }
    return this.participantSituationForm;
  }
}




