import { Component, Input, OnInit} from '@angular/core';
import { FormGroup} from '@angular/forms';
import { POSI_malnutrition } from 'src/app/shared/constantes/POSI_dominios';


@Component({
  selector: 'app-malnutrition',
  templateUrl: './malnutrition.component.html'
})

export class MalnutritionComponent implements OnInit {
  @Input() pageForm: FormGroup;

  opcoes = [
    {valor : "nda", descricao : "Não perdeu peso"},
    {valor : "Mais de 3 KG", descricao : "Mais de 3 KG"},
    {valor : "De 1 a 3 KG", descricao : "De 1 a 3 KG"},
    {valor : "Não sabe Informar", descricao : "Não sabe Informar"}
  ]

  // posição do domínio no vetor EstruturaPage
  posicaoDominio : number = POSI_malnutrition;

  constructor() {}

  ngOnInit():void {}

}