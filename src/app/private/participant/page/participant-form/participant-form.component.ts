import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';
import { Participant } from 'src/app/shared/models/participant.model';
import { PageService } from 'src/app/shared/services/page.service';



@Component({
  selector: 'app-participant-form',
  templateUrl: './participant-form.component.html'
})
export class ParticipantFormComponent implements OnInit {
 
  @Input() pageForm : FormGroup;

  participant: Participant;

  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;
  
  // método que verifica se o form está válido
  formValido(): Boolean{
    this.branco = this.checaCampo.branco(this.pageForm.get('participantFormForm'));
    this.errado = this.checaCampo.errado(this.pageForm.get('participantFormForm'));
    return this.pageForm.get('participantFormForm').valid;
  }

  //Verifica e muda a figura de status de cada campo
  mudou(campo : string) {
    return this.checaCampo.status(this.pageForm.get('participantFormForm').get(campo));
  }

  calculaIMC(){
    let peso: number=1;
    let altura: number=1;
    if (this.pageForm.get('participantFormForm').get('p20_weight').valid){
      peso = this.pageForm.get('participantFormForm').get('p20_weight').value;
    }
    if (this.pageForm.get('participantFormForm').get('p20_height').valid){
      altura = this.pageForm.get('participantFormForm').get('p20_height').value;
    }
    let IMC = peso / (altura * altura);
    this.pageForm.get('participantFormForm').get('p20_IMC').setValue(IMC);
    this.pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('q43_bmi_obesity').setValue('N');
    this.pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('q35_bmi_less22').setValue('N');
    if (IMC <= 22){
      this.pageForm.get('biologicalAspectsForm').get('malnutritionForm').get('q35_bmi_less22').setValue('S');
    }
    if (IMC >= 27){
      this.pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('q43_bmi_obesity').setValue('S');
    }
  }

  constructor(private checaCampo: ChecaCampo, private pageService : PageService){
    
  }

  ngOnInit() { 
    this.participant = this.pageService.participant;
    console.log(this.participant);
    //this.pageForm.get('participantFormForm').get('p03_communication').setValue(this.participant.p03_communication);
    //this.pageForm.get('participantFormForm').get('p02_address').setValue(this.participant.p02_address);
  }

  submit() { 

  }
}