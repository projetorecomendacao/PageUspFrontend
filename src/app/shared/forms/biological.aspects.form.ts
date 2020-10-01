import {FormGroup, Validators, FormControl} from '@angular/forms';
import { Injectable } from '@angular/core';
import { BiologicalAspects} from 'src/app/shared/models/biological-aspects.model';
import { CardiovascularFactorsForm } from './cardiovascular-factors.form';
import { FunctionalDisabilityForm } from './functional-disability.form';
import { MalnutritionForm } from './malnutrition.form';
import { MisuseMedicationsForm } from './misuse-medications.form';
import { ObservationsBiologicalForm } from './observations-biological.form';
import { SensoryDeficitForm } from './sensory-deficit.form';

@Injectable()
export class BiologicalAspectsForm{

  private biologicalAspectsForm: FormGroup;
  
  constructor(private cardiovascularFactorsForm: CardiovascularFactorsForm,
            private functionalDisabilityForm: FunctionalDisabilityForm,
            private malnutritionForm : MalnutritionForm,
            private misuseMedicationsForm: MisuseMedicationsForm,
            private sensoryDeficitForm : SensoryDeficitForm,
            private commentsForm : ObservationsBiologicalForm){

  }

  geraFormGroup(data?: BiologicalAspects): FormGroup {
    if (data){
        this.biologicalAspectsForm = new FormGroup({
            'cardiovascularFactorsForm' : this.cardiovascularFactorsForm.geraFormGroup(data.cardiovascularFactors_instance),
            'functionalDisabilityForm': this.functionalDisabilityForm.geraFormGroup(data.functionalDisability_instance),
            'malnutritionForm' : this.malnutritionForm.geraFormGroup(data.malNutrition_instance),
            'misuseMedicationsForm': this.misuseMedicationsForm.geraFormGroup(data.misuseMedications_instance),
            'sensoryDeficitForm' : this.sensoryDeficitForm.geraFormGroup(data.sensoryDeficit_instance),
            'commentsForm' : this.commentsForm.geraFormGroup(data.comments)
        });
    }  else  {
        this.biologicalAspectsForm = new FormGroup({
          'cardiovascularFactorsForm' : this.cardiovascularFactorsForm.geraFormGroup(),
          'functionalDisabilityForm': this.functionalDisabilityForm.geraFormGroup(),
          'malnutritionForm' : this.malnutritionForm.geraFormGroup(),
          'misuseMedicationsForm': this.misuseMedicationsForm.geraFormGroup(),
          'sensoryDeficitForm' : this.sensoryDeficitForm.geraFormGroup(),
          'commentsForm' : this.commentsForm.geraFormGroup()
        });
    }
    return this.biologicalAspectsForm;
  }
}


