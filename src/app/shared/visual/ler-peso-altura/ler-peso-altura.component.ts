import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChecaCampo } from '../../services/checa-campo';

@Component({
  selector: 'app-ler-peso-altura',
  templateUrl: './ler-peso-altura.component.html'
})
export class LerPesoAlturaComponent implements OnInit {
  @Input() pageForm : FormGroup;

  constructor(private checaCampo: ChecaCampo) { }

  ngOnInit(): void {
  }

  //Verifica e muda a figura de status de cada campo
  mudou(campo : string) {
    return this.checaCampo.status(this.pageForm.get('participantFormForm').get(campo));
  }

  calculaIMC(): string{
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
    return IMC.toFixed(2)
  }

}
