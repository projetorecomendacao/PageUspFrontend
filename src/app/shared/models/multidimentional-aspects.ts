export interface Falls {
    id: number;
    q88_falls_last_year: string;
    q88_amount_falls_last_year: number;
    q89_fractures_due_to_falls: string;
    q89_fractures_due_to_falls_list: string;
    q90_falls_activity: string;
    q91_strength_mmii: string;
    q92_equilibrium: string;
    q93_walking_aid_device: string;
    q94_older_than75: string;
    q95_female: string;
    q96_cognitive_alterations: string;
    q97_av_ds_commitment: string;
    q98_visual_deficit: string;
    q99_domestic_risks: string;
    q100_behavior_risk: string;
    q101_inactivity: string;
    q102_prior_ave: string;
    q103_psychotropic_medications_use: string;
    q104_has_diseases: string;
    comments: string;
    need_investigation: string;
    max_score: number;
    score: number;
}

export interface MultidisciplinaryDomain {
    id: number;

    falls_instance: Falls;

    comments: string;
    max_score: number;
}
