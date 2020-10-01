import {FormGroup} from '@angular/forms';
import { Injectable } from '@angular/core';
import { MultidisciplinaryDomain } from 'src/app/shared/models/multidimentional-aspects';
import { FallsForm } from './falls.form';
import { ObservationsMultidimensionalForm } from './observations-multidimensional.form';

@Injectable()
export class MultidimensionalAspectForm{

  private multidimensionalAspectForm: FormGroup;
  
  constructor(private falls: FallsForm, private commentsForm: ObservationsMultidimensionalForm) { }
  
  geraFormGroup(data?: MultidisciplinaryDomain): FormGroup {
    if (data){
      this.multidimensionalAspectForm = new FormGroup ({
        'fallsForm' : this.falls.geraFormGroup(data.falls_instance),
        'commentsForm' : this.commentsForm.geraFormGroup(data.comments)
      })
    }
    else 
    {
      this.multidimensionalAspectForm = new FormGroup ({
        'fallsForm' : this.falls.geraFormGroup(),
        'commentsForm' : this.commentsForm.geraFormGroup()
      })
    }
    return this.multidimensionalAspectForm;
  }
}

