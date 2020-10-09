export interface SensoryDeficit {
  id: number;
  q20_vision_problems: string;
  q21_hearing_problems: string;
  q22_taste_problems: string;
  q23_do_activities_problems: string;
  comments: string;
  need_investigation : string;
  max_score : number;
  score: number;
}


export interface FunctionalDisability {
  id: number;
  q24_to_shop: string;
  q25_use_transport: string;
  q26_to_cook: string;
  q27_useTelephone: string;
  q28_dress_up: string;
  q29_takeShower: string;
  comments: string;
  need_investigation : string;
  max_score : number;
  score: number;
}


export interface Malnutrition {
  id: number;
  d30_difficulty_chewing: string;
  d31_less3_meal_daily: string;
  d32_decreases_amount_food: string;
  d33_lost_weight_no_reason: string;
  d33_lost_weight_no_reason_amount: string;
  d34_stress_illness_hospitalization: string;
  q35_bmi_less22: string;
  comments: string;
  need_investigation : string;
  max_score : number;
  score: number;
}


export interface CardiovascularFactors {
  id: number;
  q36_dcv_familiar_history: string;
  q37_hypertension: string;
  q38_uncontrolled_diabetes: string;
  q39_cholesterol: string;
  q37_hypertension_unknow: string,
  q38_uncontrolled_diabetes_unknow: string,
  q39_cholesterol_unknow: string,
  q40_smoker: string;
  q41_drink_type: string;
  q41_alcohol_Ingested_last_week_amount: string;
  q41_alcohol_Ingested_last_week: string;
  q42_practice_exercises_regularly: string;
  q42_practise_exercises_frequency: string;
  q42_practise_exercises_time: string;
  q42_practice_exercises: string;
  q43_bmi_obesity: string;
  comments: string;
  need_investigation : string;
  max_score : number;
  score: number;
}


export interface MisuseMedications {
  id: number;
  q44_diseases_last_5_years_a: string;
  q44_diseases_last_5_years_b: string;
  q44_diseases_last_5_years_c: string;
  q44_diseases_last_5_years_d: string;
  q44_diseases_last_5_years_e: string;
  q44_diseases_last_5_years_f: string;
  q44_diseases_last_5_years_g: string;
  q44_diseases_last_5_years_h: string;
  q44_diseases_last_5_years_i: string;
  q44_diseases_last_5_years_j: string;
  q44_diseases_last_5_years_k: string;
  q44_diseases_last_5_years_l: string;
  q44_diseases_last_5_years_l_other: string;
  q44_diseases_last_5_years_amount: number;
  
  q45_health_problems_a: string;
  q45_health_problems_b: string;
  q45_health_problems_c: string;
  q45_health_problems_d: string;
  q45_health_problems_e: string;
  q45_health_problems_f: string;
  q45_health_problems_g: string;
  q45_health_problems_h: string;
  q45_health_problems_h_other: string;
  
  q46_medicines: string;
  q46_medicines_polypharmacy: string;
  q47_know_medicines: string;
  q48_medicines_increase: string;
  q49_medicine_medical_precribed: string;
  q50_medicine_medical_advice: string;
  q51_already_stopped_medicines: string;
  q52_self_medication: string;
  q53_inappropriate_medication: string;
  q54_risk_adverse_reaction: string;
  comments: string;
  need_investigation : string;
  max_score : number;
  score: number;
}


export interface BiologicalAspects {
  id: number;
  sensoryDeficit_instance: SensoryDeficit;
  functionalDisability_instance: FunctionalDisability;
  malNutrition_instance: Malnutrition;
  cardiovascularFactors_instance: CardiovascularFactors;
  misuseMedications_instance: MisuseMedications;

  comments: string;
  max_score: number;
}
