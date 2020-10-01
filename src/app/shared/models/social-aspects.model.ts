export interface LowSocialSupport {
    id: number;
    q55_spouse: string;
    q55_mother: string;
    q55_father: string;
    q55_brothers: number;
    q55_children: number;
    q55_gran_children: number;
    q55_great_gran_children: number;
    q56_meet_family_friends: string;
    q57_participate_family_decisions: string;
    q58_satisfied_family_relationship: string;
    q59_helped_if_need_money: string;
    q60_someone_helps_if_need: string;
    q61_someone_to_have_fun: string;
    q62_participate_social_events: string;
    q63_regulary_healt_services: string;
    comments: string;
    need_investigation : string;
    max_score: number;
    score: number;
}

export interface Violence {
    id: number;
    q64_afraid_close_person: string;
    q65_feels_abandoned: string;
    q66_forced: string;
    q67_assauteld: string;
    q68_in_need: string;
    q69_someone_used_money: string;
    q70_touched_without_permission: string;
    q71_dont_take_care_health: string;
    comments: string;
    need_investigation : string;
    max_score: number;
    score: number;
}

export interface EnvironmentalProblems {
    id: number;
    q72_estable_furniture: string;
    q73_loose_objects_carpets: string;
    q74_slippery_floor: string;
    q75_non_slippery_carpet: string;
    q76_stairs: string;
    q77_lighted_stairs: string;
    q78_handrail_on_stairs: string;
    
    q79_get_on_stool: string;
    q80_turn_lights_on: string;
    q81_safe_shoes: string;
    
    q82_manicure_sidewalks: string;
    q83_public_transport_access: string;
    q84_commerce_access: string;
    q85_ease_plasewalking: string;
    q86_fun_access: string;
    q87_safety: string;
    comments: string;
    need_investigation : string;
    max_score: number;
    score: number;

}


export interface SocialAspects {
    id: number;

    lowSocialSupport_instance: LowSocialSupport;
    environmentalProblems_instance: EnvironmentalProblems;
    violence_instance: Violence;

    comments: string;
    max_score : number;

}
