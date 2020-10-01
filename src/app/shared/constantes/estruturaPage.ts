import { Injectable } from '@angular/core';
import { POSI_cardiovascularFactors, POSI_cognitiveDeficit, POSI_depression, POSI_environmentalProblems, POSI_falls, POSI_functionalDisability, POSI_lowSocialSupport, POSI_malnutrition, POSI_misuseMedications, POSI_negativeAttitudesAging, POSI_sensoryDeficit, POSI_violence } from './POSI_dominios';

@Injectable()
export class EstruturaPage {

    public dominioEstrutura: EstruturaDominio[];
     
    constructor(){
        this.dominioEstrutura = new Array(12);
        this.dominioEstrutura[POSI_cognitiveDeficit] = {'dimensao':'psychologicalAspectsForm','dominio':'cognitiveDeficitForm','nomeDominio':'Déficit Cognitivo','max_score':6,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':1,'questaoFim': 6,'campoComentario' : 'comments', 'corTitulo': 'bg-primary', 'corLateral' : 'azulceu'};
        this.dominioEstrutura[POSI_negativeAttitudesAging] = {'dimensao':'psychologicalAspectsForm','dominio':'negativeAttitudesAgingForm','nomeDominio':'Atitudes Negativas em Relação ao Processo de Envelhecimento','max_score':8,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':7,'questaoFim': 14,'campoComentario' : 'comments', 'corTitulo': 'bg-primary', 'corLateral' : 'azulceu'};
        this.dominioEstrutura[POSI_depression] = {'dimensao':'psychologicalAspectsForm','dominio':'depressionForm','nomeDominio':'Depressão','max_score':5,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':15,'questaoFim': 19,'campoComentario' : 'comments', 'corTitulo': 'bg-primary', 'corLateral' : 'azulceu'};
        this.dominioEstrutura[POSI_sensoryDeficit] = {'dimensao':'biologicalAspectsForm','dominio':'sensoryDeficitForm','nomeDominio':'Déficit Sensorial','max_score':4,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':20,'questaoFim': 23,'campoComentario' : 'comments', 'corTitulo': 'bg-success', 'corLateral' : 'verdepale'};
        this.dominioEstrutura[POSI_functionalDisability] = {'dimensao':'biologicalAspectsForm','dominio':'functionalDisabilityForm','nomeDominio':'Incapacidade Funcional','max_score':6,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':24,'questaoFim': 29,'campoComentario' : 'comments', 'corTitulo': 'bg-success', 'corLateral' : 'verdepale'};
        this.dominioEstrutura[POSI_malnutrition] = {'dimensao':'biologicalAspectsForm','dominio':'malnutritionForm','nomeDominio':'Desnutrição','max_score':6,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':30,'questaoFim': 35,'campoComentario' : 'comments', 'corTitulo': 'bg-success', 'corLateral' : 'verdepale'};
        this.dominioEstrutura[POSI_cardiovascularFactors] = {'dimensao':'biologicalAspectsForm','dominio':'cardiovascularFactorsForm','nomeDominio':'Doenças Cardiovasculares (DCV)','max_score':8,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':36,'questaoFim': 43,'campoComentario' : 'comments', 'corTitulo': 'bg-success', 'corLateral' : 'verdepale'};
        this.dominioEstrutura[POSI_misuseMedications] = {'dimensao':'biologicalAspectsForm','dominio':'misuseMedicationsForm','nomeDominio':'Uso Inadequado de Medicamentos','max_score':9,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':46,'questaoFim': 54,'campoComentario' : 'comments', 'corTitulo': 'bg-success', 'corLateral' : 'verdepale'};
        this.dominioEstrutura[POSI_lowSocialSupport] = {'dimensao':'socialAspectsForm','dominio':'lowSocialSupportForm','nomeDominio':'Baixo Suporte Social','max_score':8,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':56,'questaoFim': 63,'campoComentario' : 'comments', 'corTitulo': 'bg-warning', 'corLateral' : 'khaki'};
        this.dominioEstrutura[POSI_violence] = {'dimensao':'socialAspectsForm','dominio':'violenceForm','nomeDominio':'Violência','max_score':8,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':64,'questaoFim': 71,'campoComentario' : 'comments', 'corTitulo': 'bg-warning', 'corLateral' : 'khaki'};
        this.dominioEstrutura[POSI_environmentalProblems] = {'dimensao':'socialAspectsForm','dominio':'environmentalProblemsForm','nomeDominio':'Problemas Ambientais','max_score':16,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':72,'questaoFim': 87,'campoComentario' : 'comments', 'corTitulo': 'bg-warning', 'corLateral' : 'khaki'};
        this.dominioEstrutura[POSI_falls] = {'dimensao':'multidimensionalAspectsForm','dominio':'fallsForm','nomeDominio':'Quedas','max_score':16,'campoScore':'score','campoInvestigar' : 'need_investigation','questaoInicio':88,'questaoFim': 104,'campoComentario' : 'comments', 'corTitulo': 'bg-danger', 'corLateral' : 'coral'};
            
    }

    getDimensao(pos: number) : string { return this.dominioEstrutura[pos].dimensao};	
    getDominio(pos: number) : string { return this.dominioEstrutura[pos].dominio};
    getNomeDominio(pos: number) : string { return this.dominioEstrutura[pos].nomeDominio};
    getMax_score(pos: number) : number { return this.dominioEstrutura[pos].max_score};	
    getCampoScore(pos: number) : string { return this.dominioEstrutura[pos].campoScore};	
    getCampoInvestigar(pos: number) : string { return this.dominioEstrutura[pos].campoInvestigar};	
    getQuestaoInicio(pos: number) : number { return this.dominioEstrutura[pos].questaoInicio};	
    getQuestaoFim(pos: number) : number	{ return this.dominioEstrutura[pos].questaoFim};
    getCampoComentario(pos: number) : string { return this.dominioEstrutura[pos].campoComentario};
    getCorTitulo(pos: number) : string { return this.dominioEstrutura[pos].corTitulo};
    getCorLateral(pos: number) : string { return this.dominioEstrutura[pos].corLateral};

}

interface EstruturaDominio {
  dimensao: string; // nome da dimensao
  dominio: string;  // nome do domínio
  nomeDominio: string;  // Descrição do domínio que aparece no título
  max_score : number; //score máximo do domínio 
  campoScore : string;  // nome do campo de score
  campoInvestigar : string;// nome do campo investigar;
  //vetor com os nomes dos campos que contam pontos
  questaoInicio : number;
  questaoFim : number;
  //campo de comentário
  campoComentario : string;
  //Cores
  corTitulo : string;
  corLateral : string;
}
