import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';

@Component({
  selector: 'app-observations-psychological',
  templateUrl: './observations-psychological.component.html'
})
export class ObservationsPsychologicalComponent implements OnInit {

  @Input() pageForm: FormGroup;
  dimensao: string = "psychologicalAspectsForm"
  // variáveis booleans que controlam as mensagens de certo e errado no final do form

  public errado: boolean = false;
  public branco: boolean = true;
  
  //dominio e dimensao

  public dominio: string = 'commentsForm'; 
  //O vetor de imagens tem as imagens de checagem dos campos

  
  //O serviço checa campo retorna as imanges de verificação dos campos 
  constructor(private checaCampo : ChecaCampo) {  }
  
  ngOnInit():void {}
  
  // método que verifica se o form está válido
  formValido(): Boolean{
    this.branco = this.checaCampo.branco(this.pageForm.get(this.dimensao).get(this.dominio));
    this.errado = this.checaCampo.errado(this.pageForm.get(this.dimensao).get(this.dominio));
    return this.pageForm.get(this.dimensao).get(this.dominio).valid;
  }

  //Verifica e muda a figura de status de cada campo
  mudou(campo : string): string {
    return this.checaCampo.status(this.pageForm.get(this.dimensao).get(this.dominio).get("comments"));
  }
}
