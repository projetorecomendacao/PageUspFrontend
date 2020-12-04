import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Injectable } from '@angular/core';
import { MisuseMedications } from 'src/app/shared/models/biological-aspects.model';
import { POSI_misuseMedications } from '../constantes/POSI_dominios';
import { EstruturaPage } from '../constantes/estruturaPage';

@Injectable()
export class MisuseMedicationsForm{

  private misuseMedicationsForm: FormGroup;
  
  constructor(private fb: FormBuilder, private estruturaPage : EstruturaPage) { }
  
  geraFormGroup(data?: MisuseMedications): FormGroup {
    if (data){
      this.misuseMedicationsForm = this.fb.group({
        q44_diseases_last_5_years_a: [data.q44_diseases_last_5_years_a,[Validators.required]],
        q44_diseases_last_5_years_b: [data.q44_diseases_last_5_years_b,[Validators.required]],
        q44_diseases_last_5_years_c: [data.q44_diseases_last_5_years_c,[Validators.required]],
        q44_diseases_last_5_years_d: [data.q44_diseases_last_5_years_d,[Validators.required]],
        q44_diseases_last_5_years_e: [data.q44_diseases_last_5_years_e,[Validators.required]],
        q44_diseases_last_5_years_f: [data.q44_diseases_last_5_years_f,[Validators.required]],
        q44_diseases_last_5_years_g: [data.q44_diseases_last_5_years_g,[Validators.required]],
        q44_diseases_last_5_years_h: [data.q44_diseases_last_5_years_h,[Validators.required]],
        q44_diseases_last_5_years_i: [data.q44_diseases_last_5_years_i,[Validators.required]],
        q44_diseases_last_5_years_j: [data.q44_diseases_last_5_years_j,[Validators.required]],
        q44_diseases_last_5_years_k: [data.q44_diseases_last_5_years_k,[Validators.required]],
        q44_diseases_last_5_years_l: [data.q44_diseases_last_5_years_l,[Validators.required]],
        q44_diseases_last_5_years_l_other: [data.q44_diseases_last_5_years_l_other,[Validators.required]],
        q44_diseases_last_5_years_amount: [data.q44_diseases_last_5_years_amount,[Validators.required]],
        
        q45_health_problems_a: [data.q45_health_problems_a,[Validators.required]],
        q45_health_problems_b: [data.q45_health_problems_b,[Validators.required]],
        q45_health_problems_c: [data.q45_health_problems_c,[Validators.required]],
        q45_health_problems_d: [data.q45_health_problems_d,[Validators.required]],
        q45_health_problems_e: [data.q45_health_problems_e,[Validators.required]],
        q45_health_problems_f: [data.q45_health_problems_f,[Validators.required]],
        q45_health_problems_g: [data.q45_health_problems_g,[Validators.required]],
        q45_health_problems_h: [data.q45_health_problems_h,[Validators.required]],
        q45_health_problems_h_other: [data.q45_health_problems_h_other,[Validators.required]],
        
        q46_medicines: [data.q46_medicines,[Validators.required]],
        q46_medicines_polypharmacy: [data.q46_medicines_polypharmacy,[Validators.required]],
        q47_know_medicines: [data.q47_know_medicines,[Validators.required]],
        q48_medicines_increase: [data.q48_medicines_increase,[Validators.required]],
        q49_medicine_medical_precribed: [data.q49_medicine_medical_precribed,[Validators.required]],
        q50_medicine_medical_advice: [data.q50_medicine_medical_advice,[Validators.required]],
        q51_already_stopped_medicines: [data.q51_already_stopped_medicines,[Validators.required]],
        q52_self_medication: [data.q52_self_medication,[Validators.required]],
        q53_inappropriate_medication: [data.q53_inappropriate_medication,[Validators.required]],
        q54_risk_adverse_reaction: [data.q54_risk_adverse_reaction,[Validators.required]],
        comments: [data.comments],
        need_investigation: [data.need_investigation,[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_misuseMedications),[Validators.required]],
        score: [data.score,[Validators.required]],
      });
    }
    else 
    {
      this.misuseMedicationsForm = this.fb.group({
        q44_diseases_last_5_years_a: ['',[Validators.required]],
        q44_diseases_last_5_years_b: ['',[Validators.required]],
        q44_diseases_last_5_years_c: ['',[Validators.required]],
        q44_diseases_last_5_years_d: ['',[Validators.required]],
        q44_diseases_last_5_years_e: ['',[Validators.required]],
        q44_diseases_last_5_years_f: ['',[Validators.required]],
        q44_diseases_last_5_years_g: ['',[Validators.required]],
        q44_diseases_last_5_years_h: ['',[Validators.required]],
        q44_diseases_last_5_years_i: ['',[Validators.required]],
        q44_diseases_last_5_years_j: ['',[Validators.required]],
        q44_diseases_last_5_years_k: ['',[Validators.required]],
        q44_diseases_last_5_years_l: ['',[Validators.required]],
        q44_diseases_last_5_years_l_other: ['',[Validators.required]],
        q44_diseases_last_5_years_amount: ['',[Validators.required]],
        
        q45_health_problems_a: ['',[Validators.required]],
        q45_health_problems_b: ['',[Validators.required]],
        q45_health_problems_c: ['',[Validators.required]],
        q45_health_problems_d: ['',[Validators.required]],
        q45_health_problems_e: ['',[Validators.required]],
        q45_health_problems_f: ['',[Validators.required]],
        q45_health_problems_g: ['',[Validators.required]],
        q45_health_problems_h: ['',[Validators.required]],
        q45_health_problems_h_other: ['',[Validators.required]],
        
        q46_medicines: ['',[Validators.required]],
        q46_medicines_polypharmacy: ['',[Validators.required]],
        q47_know_medicines: ['',[Validators.required]],
        q48_medicines_increase: ['',[Validators.required]],
        q49_medicine_medical_precribed: ['',[Validators.required]],
        q50_medicine_medical_advice: ['',[Validators.required]],
        q51_already_stopped_medicines: ['',[Validators.required]],
        q52_self_medication: ['',[Validators.required]],
        q53_inappropriate_medication: ['',[Validators.required]],
        q54_risk_adverse_reaction: ['',[Validators.required]],
        comments: [''],
        need_investigation: ['',[Validators.required]],
        max_score: [this.estruturaPage.getMax_score(POSI_misuseMedications),[Validators.required]],
        score: ['',[Validators.required]],
      });
    }
    return this.misuseMedicationsForm;
  }
}