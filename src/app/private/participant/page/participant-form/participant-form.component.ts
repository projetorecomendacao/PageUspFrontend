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
  
  //Utilizada para desligar o botão de salvar no final do html
  @Input() desligar : boolean;

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

  constructor(private checaCampo: ChecaCampo, private pageService : PageService){
    
  }

  ngOnInit() { 
    this.participant = this.pageService.participant;
    if(this.pageForm.get('participantFormForm').get('p20_weight').invalid){
      this.pageForm.get('participantFormForm').get('p20_weight').setValue(1)
    }
    if(this.pageForm.get('participantFormForm').get('p20_height').invalid){
      this.pageForm.get('participantFormForm').get('p20_height').setValue(0)
    }
    if(this.pageForm.get('participantFormForm').get('p20_IMC').invalid){
      this.pageForm.get('participantFormForm').get('p20_IMC').setValue(0)
    }
    this.pageForm.get('participantFormForm').get('p03_communication').setValue(this.participant.p03_communication);
    this.pageForm.get('participantFormForm').get('p02_address').setValue(this.participant.p02_address);
  }

  submit() { 

  }

  //Quando for chamado pela view será desabilitado...
  desabilitar():boolean{
    return this.desligar || false;
  }

  mostrar(){
    console.log(this.pageForm)
  }
}