import { Participant, ParticipantSituation } from './participant.model';
import { PsychologicalAspects } from './psychological-aspects.model';
import { BiologicalAspects } from './biological-aspects.model';
import { SocialAspects } from './social-aspects.model';
import { MultidisciplinaryDomain } from './multidimentional-aspects';
import { FinalAnalise } from './final-analise';
import { Time } from '@angular/common';

export class Page {
  id : number;
  service: string;
  entrance: Date;
  interviewed: string;
  interviewer: string;
  avaliation_date: Date;
  start_time: Time;
  end_time: Time;
  created_at: Date;
  updated_at: Date;
  
  gerontologist_id: number;

  participant: Participant;
  participant_situation: ParticipantSituation;
  psychologicalAspects: PsychologicalAspects;
  biologicalAspects: BiologicalAspects;
  socialAspects: SocialAspects;
  multidisciplinaryDomain: MultidisciplinaryDomain;
  finalAnalise : FinalAnalise;


}
