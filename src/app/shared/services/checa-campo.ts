import { Injectable } from "@angular/core";
import { AbstractControl} from '@angular/forms';
import { EstruturaPage } from '../constantes/estruturaPage';
import { EstruturaQuestao } from '../constantes/estruturaQuestao';

@Injectable()
export class ChecaCampo {
    imagens: string[] = [
        'assets/checked_not_bak.png',
        'assets/checked_ok_bak.png',
        'assets/asterisco.png'
    ];

    checa(imagem: boolean): string{
        if (imagem){
            return this.imagens[1];
        }
        return this.imagens[0];
    }
    inicio(): string{
        return this.imagens[2];
    }

    status(campo: AbstractControl): string{
        if (campo.valid){
            return this.imagens[1];
        }
        if (campo.pristine){
            return this.imagens[2]
        }
        return this.imagens[0];
    }

    branco(pageForm : AbstractControl): boolean{
        for (var caca in pageForm.value){
            if(!pageForm.get(caca).valid){
              if(pageForm.get(caca).pristine){
                return true;
              } 
            }
        }
        return false;
    }

    errado(pageForm : AbstractControl): boolean{
        for (var caca in pageForm.value){
            if(!pageForm.get(caca).valid){
              if(!pageForm.get(caca).pristine){
                return true;
              } 
            }
        }
        return false;
    }

    constructor(private estruturaPage : EstruturaPage, private estruturaQuestao : EstruturaQuestao){
    }

    questao(pos : number): string{
        return this.estruturaQuestao.getQuestao(pos);
    }

    sim (pos : number): string{
        return this.estruturaQuestao.getSim(pos);
    }

    nao (pos : number): string{
        // Só retorna 1 se o sim for 0
        if (this.estruturaQuestao.getSim(pos) != '0') {
            return '0';
        } 
        return '1';
    }

    campo(pos : number): string{
        return this.estruturaQuestao.getCampo(pos);
    }

    getDimensao(pos: number): string { return this.estruturaPage.getDimensao(pos)};	
    getDominio(pos: number): string { return this.estruturaPage.getDominio(pos)};
    getNomeDominio(pos: number): string { return this.estruturaPage.getNomeDominio(pos)};
    getMax_score(pos: number): number { return this.estruturaPage.getMax_score(pos)};	
    getCampoScore(pos: number): string { return this.estruturaPage.getCampoScore(pos)};	
    getCampoInvestigar(pos: number): string { return this.estruturaPage.getCampoInvestigar(pos)};	
    getQuestaoInicio(pos: number): number { return this.estruturaPage.getQuestaoInicio(pos)};	
    getQuestaoFim(pos: number): number { return this.estruturaPage.getQuestaoFim(pos)};
    getCampoComentario(pos: number): string { return this.estruturaPage.getCampoComentario(pos)};
    getCorTitulo(pos: number) : string { return this.estruturaPage.getCorTitulo(pos)};
    getCorLateral(pos: number) : string { return this.estruturaPage.getCorLateral(pos)};



}