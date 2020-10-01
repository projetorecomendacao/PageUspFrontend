import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Participant } from 'src/app/shared/models/participant.model';
import { REST_URL_PARTICIPANTS } from 'src/app/shared/constantes/REST_API_URLs';
import { DAOService } from 'src/app/shared/services/dao.service';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html'
})
export class ParticipantEditComponent implements OnInit {
  @Output() volta = new EventEmitter();

  branco = false;
  errado = false;

  submitted = false;

  public addParticipantForm: FormGroup = this.form.group({
    p00_email: ['', Validators.required],
    p01_name: ['', Validators.required],
    p02_address: ['', Validators.required],
    p03_communication: ['', Validators.required],
    p04_birth_date: ['', Validators.required],
    p05_age: ['', [Validators.required,Validators.max(120),Validators.min(18)]],
    p06_gender: ['', Validators.required],
    p20_profile_photo_URL: [null]
  });

  // convenience getter for easy access to form fields
  get f() { return this.addParticipantForm.controls; }

  constructor(private dao : DAOService, private form: FormBuilder) { }

  ngOnInit(): void {
  }

  addParticipant() {
    this.submitted = true;
    if (this.addParticipantForm.invalid){
      alert ('O formulário possui campos com erro !!!')
      return;
    }
    this.dao.postObject(REST_URL_PARTICIPANTS, this.addParticipantForm.getRawValue()).subscribe((data: any) => {
      this.volta.emit(data);
    });
    this.addParticipantForm.reset();
  }

  
  //calcula a idade do participante
  calculaIdade(){
      const now = new Date(); // Data de hoje
      const past = new Date(this.addParticipantForm.get('p04_birth_date').value); // Outra data no passado
      const diff = Math.abs(now.getTime() - past.getTime()); // Subtrai uma data pela outra
      const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25)); // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
      //console.log('anos ' + years + '  dif: '  + diff  + 'Hoje: ' + now.getTime()  + '  Niver: ' + past.getTime());
      this.addParticipantForm.get('p05_age').setValue(years);
  }
  
  //Verifica se a idade do participante é compatível
  checaIdade(){
    if (this.addParticipantForm.get('p04_birth_date').valid) {
      this.calculaIdade();    
      if (!this.addParticipantForm.get('p05_age').valid){
        return true;
      }
    }
    return false;
  }

  limpa(){
    this.addParticipantForm.reset();
    this.submitted=false;
  }


}
