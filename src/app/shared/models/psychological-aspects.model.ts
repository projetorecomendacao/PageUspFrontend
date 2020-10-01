export interface CognitionDeficit {
  id: number;
  q1_memory_good_like_others: string;
  q2_three_words: string;
  q3_15: string;
  q3_30: string;
  q3_45: string;
  q3_60: string;
  q3_animals: string;
  q4_three_words: string;
  q5_three_commands: string;
  q6_clock: string;
  comments: string;
  need_investigation : string;
  max_score: number;
  score: number;
}

export class NegativeAttitudesAging {
  id: number;
  q7_age_self_perception: number;
  q7_age_self_perception_why: string;
  q7_age_self_perception_analyze: string;
  q8_good_health: string;
  q9_more_neg_pos: string;
  q10_worried: string;
  q11_sex_life: string;
  q12_little_to_do: string;
  q13_physical_weakness: string;
  q14_better_die: string;
  comments: string;
  need_investigation: string;
  max_score: number;
  score: number;
}

export interface Depression {
  id: number;
  q15_satisfied_with_life: string;
  q16_frequently_sad: string;
  q17_stopped_doing_things: string;
  q18_fear_bad_things_happen: string;
  q19_impatient_disquiet: string;
  comments: string;
  need_investigation : string;
  max_score: number;
  score: number;
}

export interface PsychologicalAspects {
  id: number;

  cognition_deficit_instance: CognitionDeficit;
  negative_attitudes_aging_instance: NegativeAttitudesAging;
  depression_instance: Depression;

  comments: string;
  max_score: number;
}
