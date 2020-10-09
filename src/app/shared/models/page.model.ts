import { Participant, ParticipantSituation } from './participant.model';
import { PsychologicalAspects } from './psychological-aspects.model';
import { BiologicalAspects } from './biological-aspects.model';
import { SocialAspects } from './social-aspects.model';
import { MultidisciplinaryDomain } from './multidimentional-aspects';
import { DemandMap } from './demand-map';
import { Time } from '@angular/common';

export class Page {
  id : number;
  service: string;
  entrance: Date;
  interviewed: string;
  interviewer: string;
  avaliation_date: Date;
  start_time: string;
  end_time: string;
  created_at: Date;
  updated_at: Date;
  
  gerontologist_id: number;

  participant: Participant;
  participant_situation: ParticipantSituation;
  psychologicalAspects: PsychologicalAspects;
  biologicalAspects: BiologicalAspects;
  socialAspects: SocialAspects;
  multidisciplinaryDomain: MultidisciplinaryDomain;
  demandMap : DemandMap;

}
