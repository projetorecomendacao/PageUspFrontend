import { Injectable } from "@angular/core";
import { Page } from 'src/app/shared/models/page.model';
import { Participant, ParticipantSituation } from 'src/app/shared/models/participant.model';
import { CognitionDeficit, NegativeAttitudesAging, Depression, PsychologicalAspects } from 'src/app/shared/models/psychological-aspects.model';
import { SensoryDeficit, FunctionalDisability, Malnutrition, CardiovascularFactors, MisuseMedications, BiologicalAspects } from 'src/app/shared/models/biological-aspects.model';
import { LowSocialSupport, EnvironmentalProblems, Violence, SocialAspects } from 'src/app/shared/models/social-aspects.model';
import { Falls, MultidisciplinaryDomain } from 'src/app/shared/models/multidimentional-aspects';


@Injectable()
export class PageGerador{
    private participantSituation : ParticipantSituation = {   
        id: 3,
        p02_address: 'N',
        p03_communication: 'N',
        p07_marital_status: 'Solteiro(a)',
        p08_schooling: 'ensino fundamental (completo)',
        p09_study_time: 3,
        p10_is_retired: 'N',
        p10_actual_profession: 'N',
        p11_retire_more_time_activity: 'N',
        p12_is_working_professionals_activities: 'N',
        p12_professional_activities: 'N',
        p13_income_I: 'Entre 3 e 4 salários mínimos',
        p13_income_F: 'Entre 3 e 4 salários mínimos',
        p14_lives_with: 'N',
        p15_has_religion: 'N',
        p15_religion: 'N',
        p16_health_self_report: 'N',
        p20_weight: 3,
        p20_height: 3,
        p20_IMC: 3,
        p30_car: 'N',
        p30_bus: 'N',
        p30_uber: 'N',
        p30_ride: 'N',
        p30_ride_with: 'N',
        p31_comments: 'N' 
    };


    private cognitionDeficit : CognitionDeficit = ({
        id: 1,
        q1_memory_good_like_others: 'S',
        q2_three_words: 'N',
        q3_15: 'S',
        q3_30: 'N',
        q3_45: 'S',
        q3_60: 'N',
        q3_animals: 'S',
        q4_three_words: 'N',
        q5_three_commands: 'S',
        q6_clock: 'N',
        comments: 'S',
        need_investigation: 'N',
        max_score: 0,
        score: 0,
    });
     
    private negativeAttitudesAging : NegativeAttitudesAging = ({
        id: 1,
        q7_age_self_perception: 65,
        q7_age_self_perception_why: 'S',
        q7_age_self_perception_analyze: 'N',
        q8_good_health: 'S',
        q9_more_neg_pos: 'N',
        q10_worried: 'S',
        q11_sex_life: 'N',
        q12_little_to_do: 'S',
        q13_physical_weakness: 'N',
        q14_better_die: 'S',
        comments: 'N',
        need_investigation: 'S',
        max_score: 0,
        score: 0,
    });
     
    private depression : Depression = ({
        id: 1,
        q15_satisfied_with_life: 'S',
        q16_frequently_sad: 'N',
        q17_stopped_doing_things: 'S',
        q18_fear_bad_things_happen: 'N',
        q19_impatient_disquiet: 'S',
        comments: 'N',
        need_investigation: 'S',
        max_score: 0,
        score: 0,
    });

    private psi : PsychologicalAspects = {id:1, comments : 'Opa',
        cognition_deficit_instance: this.cognitionDeficit, 
        negative_attitudes_aging_instance : this.negativeAttitudesAging,
        depression_instance : this.depression, max_score : 0}
     
    private sensoryDeficit : SensoryDeficit = ({
        id: 1,
        q20_vision_problems: 'S',
        q21_hearing_problems: 'N',
        q22_taste_problems: 'S',
        q23_do_activities_problems: 'N',
        comments: 'S',
        need_investigation: 'N',
        max_score: 0,
        score: 0,
    });
     
    private functionalDisability : FunctionalDisability = ({
        id: 1,
        q24_to_shop: 'N',
        q25_use_transport: 'S',
        q26_to_cook: 'N',
        q27_useTelephone: 'S',
        q28_dress_up: 'N',
        q29_takeShower: 'S',
        comments: 'N',
        need_investigation: 'S',
        max_score: 0,
        score: 0,
    });
     
    private malnutrition  : Malnutrition = ({
        id: 1,
        d30_difficulty_chewing: 'S',
        d31_less3_meal_daily: 'N',
        d32_decreases_amount_food: 'S',
        d33_lost_weight_no_reason: 'N',
        d33_lost_weight_no_reason_amount: 'S',
        d34_stress_illness_hospitalization: 'N',
        q35_bmi_less22: 'S',
        comments: 'N',
        need_investigation: 'S',
        max_score: 0,
        score: 0,
    });
     
    private cardiovascularFactors : CardiovascularFactors = ({
        id: 1,
        q36_dcv_familiar_history: 'S',
        q37_hypertension: 'N',
        q38_uncontrolled_diabetes: 'S',
        q39_cholesterol: 'N',
        q37_hypertension_unknow: 'N',
        q38_uncontrolled_diabetes_unknow: 'N',
        q39_cholesterol_unknow: 'N',
        q40_smoker: 'S',
        q41_drink_type: 'N',
        q41_alcohol_Ingested_last_week_amount: 'S',
        q41_alcohol_Ingested_last_week: 'N',
        q42_practice_exercises_regularly: 'S',
        q42_practise_exercises_frequency: 'N',
        q42_practise_exercises_time: 'S',
        q42_practice_exercises: 'N',
        q43_bmi_obesity: 'S',
        comments: 'N',
        need_investigation: 'S',
        max_score: 0,
        score: 0,
    });
     
    private misuseMedications : MisuseMedications = ({
        id: 1,
        q44_diseases_last_5_years_a: 'S',
        q44_diseases_last_5_years_b: 'N',
        q44_diseases_last_5_years_c: 'S',
        q44_diseases_last_5_years_d: 'N',
        q44_diseases_last_5_years_e: 'S',
        q44_diseases_last_5_years_f: 'N',
        q44_diseases_last_5_years_g: 'S',
        q44_diseases_last_5_years_h: 'N',
        q44_diseases_last_5_years_i: 'S',
        q44_diseases_last_5_years_j: 'N',
        q44_diseases_last_5_years_k: 'S',
        q44_diseases_last_5_years_l: 'N',
        q44_diseases_last_5_years_l_other: 'S',
        q44_diseases_last_5_years_amount: 0,
        
        q45_health_problems_a: 'N',
        q45_health_problems_b: 'S',
        q45_health_problems_c: 'N',
        q45_health_problems_d: 'S',
        q45_health_problems_e: 'N',
        q45_health_problems_f: 'S',
        q45_health_problems_g: 'N',
        q45_health_problems_h: 'S',
        q45_health_problems_h_other: 'N',
        
        q46_medicines: 'N',
        q46_medicines_polypharmacy: 'S',
        q47_know_medicines: 'N',
        q48_medicines_increase: 'S',
        q49_medicine_medical_precribed: 'N',
        q50_medicine_medical_advice: 'S',
        q51_already_stopped_medicines: 'N',
        q52_self_medication: 'S',
        q53_inappropriate_medication: 'N',
        q54_risk_adverse_reaction: 'S',
        comments: 'N',
        need_investigation: 'S',
        max_score: 0,
        score: 0,
    });
     
    private bio : BiologicalAspects = ({id:1, comments: 'Opa',
    sensoryDeficit_instance : this.sensoryDeficit, 
    functionalDisability_instance : this.functionalDisability, 
    malNutrition_instance: this.malnutrition, 
    cardiovascularFactors_instance: this.cardiovascularFactors,
    misuseMedications_instance: this.misuseMedications, max_score : 0})
     
    lowSocialSupport :LowSocialSupport = ({
        id: 1,
        q55_spouse: 'S',
        q55_mother: 'N',
        q55_father: 'S',
        q55_brothers: 1,
        q55_children: 1,
        q55_gran_children: 1,
        q55_great_gran_children: 1,
        q56_meet_family_friends: 'N',
        q57_participate_family_decisions: 'S',
        q58_satisfied_family_relationship: 'N',
        q59_helped_if_need_money: 'S',
        q60_someone_helps_if_need: 'N',
        q61_someone_to_have_fun: 'S',
        q62_participate_social_events: 'N',
        q63_regulary_healt_services: 'S',
        comments: 'N',
        need_investigation: 'S',
        max_score: 0,
        score: 0,
    });
     
     
    private environmentalProblems : EnvironmentalProblems = ({
        id: 1,
        q72_estable_furniture: 'N',
        q73_loose_objects_carpets: 'S',
        q74_slippery_floor: 'N',
        q75_non_slippery_carpet: 'S',
        q76_stairs: 'N',
        q77_lighted_stairs: 'S',
        q78_handrail_on_stairs: 'N',
        
        q79_get_on_stool: 'N',
        q80_turn_lights_on: 'S',
        q81_safe_shoes: 'N',
        
        q82_manicure_sidewalks: 'N',
        q83_public_transport_access: 'S',
        q84_commerce_access: 'N',
        q85_ease_plasewalking: 'S',
        q86_fun_access: 'N',
        q87_safety: 'S',
        comments: 'N',
        need_investigation: 'S',
        max_score: 0,
        score: 0,
    });
     
     
    private violence : Violence = ({
        id : 1,
        q64_afraid_close_person: 'S',
        q65_feels_abandoned: 'N',
        q66_forced: 'S',
        q67_assauteld: 'N',
        q68_in_need: 'S',
        q69_someone_used_money: 'N',
        q70_touched_without_permission: 'S',
        q71_dont_take_care_health: 'N',
        comments: 'S',
        need_investigation: 'N',
        max_score: 0,
        score: 0,
    });
     
    private soc : SocialAspects = ({id:1, comments : 'Opa',   
    lowSocialSupport_instance: this.lowSocialSupport, 
    environmentalProblems_instance: this.environmentalProblems, 
    violence_instance: this.violence , max_score : 0});

    falls : Falls = ({
        id: 1,
        q88_falls_last_year: 'S',
        q88_amount_falls_last_year: 0,
        q89_fractures_due_to_falls: 'S',
        q89_fractures_due_to_falls_list: 'N',
        q90_falls_activity: 'S',
        q91_strength_mmii: 'N',
        q92_equilibrium: 'S',
        q93_walking_aid_device: 'N',

        q94_older_than75: 'N',
        q95_female: 'S',
        q96_cognitive_alterations: 'N',
        q97_av_ds_commitment: 'S',
        q98_visual_deficit: 'N',
        q99_domestic_risks: 'S',
        q100_behavior_risk: 'N',
        q101_inactivity: 'S',
        q102_prior_ave: 'N',
        q103_psychotropic_medications_use: 'S',
        q104_has_diseases: 'N',
        comments: 'S',
        need_investigation: 'N',
        max_score: 0,
        score: 0,

    });

    private mul : MultidisciplinaryDomain = ({id:1, comments : 'Opa', falls_instance: this.falls, max_score : 0});

    private demandMap = {
        id : 0,
        created_at : new Date(), 
        updated_at : new Date(),
        dm3_unmet_demands : 'Opa',
        gerontologist_assessment : 'Opa',
        demands_problems : 'Opa',
        goals : 'Opa',  
        actions_organization : 'Opa'
    }


    pegaPage(participant: Participant): Page{
        var page : Page = ({ id: -1, service: 'Usp',  entrance: new Date(), interviewed: 'Participante',
            interviewer: 'Teste', avaliation_date: new Date(), created_at: new Date(), updated_at: new Date(),
            gerontologist_id : 1 , start_time : '12:00:00', end_time : '00:00:00', 
            participant : participant,
            participant_situation: this.participantSituation,
            psychologicalAspects : this.psi,
            biologicalAspects: this.bio, 
            socialAspects: this.soc, 
            multidisciplinaryDomain: this.mul,
            demandMap : this.demandMap
            });
        return page;
    }
     
}