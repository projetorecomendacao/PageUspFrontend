export interface Participant {
  id: number;
  p00_email: string;
  p01_name: string;
  p01_name_social: string;
  p02_address: string;
  p03_communication: string;
  p04_birth_date: string;
  p05_age: number;
  p06_gender: string;
  p20_profile_photo_URL: string;
}

export interface ParticipantSituation {
  id: number;
  p02_address: string;
  p03_communication: string;
  p07_marital_status: string;
  p08_schooling: string;
  p09_study_time: number;
  p10_is_retired: string;
  p10_actual_profession: string;
  p11_retire_more_time_activity: string;
  p12_is_working_professionals_activities: string;
  p12_professional_activities: string;
  p13_income_I: string;
  p13_income_F: string;
  p14_lives_with: string;
  p15_has_religion: string;
  p15_religion: string;
  p16_health_self_report: string;
  p20_weight: number;
  p20_height: number;
  p20_IMC: number;
  p30_car: string;
  p30_bus: string;
  p30_uber: string;
  p30_ride: string;
  p30_ride_with: string;
  p31_comments: string;
}
