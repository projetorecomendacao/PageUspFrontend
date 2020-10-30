import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';
import { POSI_falls } from 'src/app/shared/constantes/POSI_dominios';
import { PageService } from 'src/app/shared/services/page.service';

@Component({
  selector: 'app-falls',
  templateUrl: './falls.component.html'
})
export class FallsComponent implements OnInit {

  @Input() pageForm: FormGroup;
  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_falls;
  dominio : string;
  dimensao : string;

  constructor(private pageService : PageService, private checaCampo: ChecaCampo) { }

  ngOnInit():void {
    this.dimensao = this.checaCampo.getDominio(this.posicaoDominio); 
    this.dominio = this.checaCampo.getDimensao(this.posicaoDominio);
  }

  enche(): boolean
  {
    // neste form domínio e dimensão estão invertidos..... Atenção....
    if (this.pageForm.get('socialAspectsForm').valid){
      // idade
      if(this.pageService.participant.p05_age > 75){
        this.pageForm.get(this.dominio).get(this.dimensao).get('q94_older_than75').setValue('S');
      } else {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q94_older_than75').setValue('N');
      }

      // sexo
      if(this.pageService.participant.p06_gender == 'F'){
        this.pageForm.get(this.dominio).get(this.dimensao).get('q95_female').setValue('S');
      } else {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q95_female').setValue('N');
      }

      //Teste do relógio - Alterações cognitivas
      if (this.pageForm.get('psychologicalAspectsForm').get('cognitiveDeficitForm').get('q6_clock').value == 'N') {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q96_cognitive_alterations').setValue('S');
      } else {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q96_cognitive_alterations').setValue('N');
      }

      //comprometimeno AVDs
      if (this.pageForm.get('biologicalAspectsForm').get('functionalDisabilityForm').get('score').value > 4) {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q97_av_ds_commitment').setValue('S');
      } else {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q97_av_ds_commitment').setValue('N');
      }

      //Déficit visual
      if (this.pageForm.get('biologicalAspectsForm').get('sensoryDeficitForm').get('q20_vision_problems').value == 'S') {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q98_visual_deficit').setValue('S');
      } else {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q98_visual_deficit').setValue('N');
      }
      
      //Riscos domésticos
      if (this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('domesticRisk').value < 7) {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q99_domestic_risks').setValue('S');
      } else {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q99_domestic_risks').setValue('N');
      }

      //Riscos comportamentais
      if (this.pageForm.get('socialAspectsForm').get('environmentalProblemsForm').get('behaviorRisk').value < 3) {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q100_behavior_risk').setValue('S');
      } else {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q100_behavior_risk').setValue('N');
      }

      //Inatividade
      if (this.pageForm.get('biologicalAspectsForm').get('cardiovascularFactorsForm').get('q42_practice_exercises').value == 'N') {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q101_inactivity').setValue('S');
      } else {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q101_inactivity').setValue('N');
      }

      //AVC
      if (this.pageForm.get('biologicalAspectsForm').get('misuseMedicationsForm').get('q44_diseases_last_5_years_c').value == 'S') {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q102_prior_ave').setValue('S');
      } else {
        this.pageForm.get(this.dominio).get(this.dimensao).get('q102_prior_ave').setValue('N');
      }
      return true;
    }
  }


}

