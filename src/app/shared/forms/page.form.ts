import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BiologicalAspectsForm } from './biological.aspects.form';
import { PsychologicalAspectsForm } from './psychological-aspects.form';
import { SocialAspectsForm} from './social-aspects.form';
import { MultidimensionalAspectForm } from './multidimensional-aspect.form';
import { ParticipantFormForm } from './participant-form.form';
import { Page } from 'src/app/shared/models/page.model';
import { CabecaPageForm } from './cabeca-page.form';
import { DemandMapForm } from './demand-map.form';

@Injectable()
export class PageForm{
    private _pageForm : FormGroup;

    constructor(private biologicalAspectsForm: BiologicalAspectsForm,
                private psychologicalAspectsForm: PsychologicalAspectsForm,
                private socialAspectsForm: SocialAspectsForm,
                private multidimensionalAspectsForm: MultidimensionalAspectForm,
                private participantFormForm: ParticipantFormForm,
                private cabecaPageForm : CabecaPageForm,
                private demandMapForm: DemandMapForm){ }

    public geraFormGroup(data?: Page): FormGroup{
        if (data){
            this._pageForm = new FormGroup({
                'cabecaPageForm' : this.cabecaPageForm.geraFormGroup(data),
                'biologicalAspectsForm': this.biologicalAspectsForm.geraFormGroup(data.biologicalAspects),
                'psychologicalAspectsForm': this.psychologicalAspectsForm.geraFormGroup(data.psychologicalAspects),
                'socialAspectsForm': this.socialAspectsForm.geraFormGroup(data.socialAspects),
                'multidimensionalAspectsForm': this.multidimensionalAspectsForm.geraFormGroup(data.multidisciplinaryDomain),
                'participantFormForm': this.participantFormForm.geraFormGroup(data.participant_situation),
                'demandMapForm' : this.demandMapForm.geraFormGroup(data.demandMap)
            })
        }
        else 
        {
            this._pageForm = new FormGroup({
                'cabecaPageForm' : this.cabecaPageForm.geraFormGroup(),
                'biologicalAspectsForm': this.biologicalAspectsForm.geraFormGroup(),
                'psychologicalAspectsForm': this.psychologicalAspectsForm.geraFormGroup(),
                'socialAspectsForm': this.socialAspectsForm.geraFormGroup(),
                'multidimensionalAspectsForm': this.multidimensionalAspectsForm.geraFormGroup(),
                'participantFormForm': this.participantFormForm.geraFormGroup(),
                'demandMapForm' : this.demandMapForm.geraFormGroup()
            })
        }
        return this._pageForm;
    }
}   






