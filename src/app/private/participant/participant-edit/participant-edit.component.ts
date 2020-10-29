import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Participant } from 'src/app/shared/models/participant.model';
import { REST_URL_PARTICIPANTS } from 'src/app/shared/constantes/REST_API_URLs';
import { DAOService } from 'src/app/shared/services/dao.service';
import { ParticipantForm } from 'src/app/shared/forms/participant.form';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-participant-edit',
  templateUrl: './participant-edit.component.html'
})
export class ParticipantEditComponent implements OnInit {
  branco = false;
  errado = false;

  submitted = false;
  id : number;

  public addParticipantForm: FormGroup; 

  // convenience getter for easy access to form fields
  get f() { return this.addParticipantForm.controls; }

  constructor(private dao : DAOService, private form: FormBuilder, private partipantForm : ParticipantForm, 
    private activateRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id == -1){
      this.addParticipantForm = this.partipantForm.geraFormGroup();
    } else {
      this.dao.getObject(REST_URL_PARTICIPANTS,this.id.toString()).subscribe((data : Participant) => {
        this.addParticipantForm = this.partipantForm.geraFormGroup(data);
      },error => {
        alert('Não foi encontrado o participante para ser alterado..');
        this.router.navigate(['private']); 
      })
    }
  }

  addParticipant() {
    this.submitted = true;
    if (this.addParticipantForm.invalid){
      alert ('O formulário possui campos com erro !!!')
      return;
    }
    if (this.id == -1) {
      this.dao.postObject(REST_URL_PARTICIPANTS, this.addParticipantForm.getRawValue()).subscribe((data: any) => {
        this.router.navigate(['private']);
      }, error => {
        alert('Não foi possível gravar os dados do participante'); 
      }); 
    } else {
      this.dao.putObject(REST_URL_PARTICIPANTS, this.addParticipantForm.getRawValue(), this.id.toString()).subscribe((data: any) => {
        this.router.navigate(['private']);
      }, error => {
        alert('Não foi possível gravar os dados do participante'); 
      }); 
    }
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
