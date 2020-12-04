import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { REST_URL_AVALIACAO } from 'src/app/shared/constantes/REST_API_URLs';
import { AvaliacaoForm } from 'src/app/shared/forms/avaliacao.form';
import { Participant } from 'src/app/shared/models/participant.model';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';
import { DAOService } from 'src/app/shared/services/dao.service';
import { PageService } from 'src/app/shared/services/page.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.component.html'
})
export class AvaliacaoComponent implements OnInit {

  avaliationForm : FormGroup;
  participant: Participant;

  questoes = [
    {"number": 5, "description": "A utilização do sistema é simples para quem já aplicou o PAGe", "name" : "q_05"},
    {"number": 6, "description": "O sistema apresenta uma implementação correta e completa do PAGe", "name" : "q_06"},
    {"number": 7, "description": "Os campos preenchidos automaticamente pelo sistema apresentam resultados corretos", "name" : "q_07"},
    {"number": 8, "description": "Os escores dos domínios, calculados automaticamentes pelos sistema, apresentam valores corretos", "name" : "q_08"},
    {"number": 9, "description": "Os escores das dimensões, calculados automaticamentes pelos sistema, apresentam valores corretos", "name" : "q_09"},
    {"number": 10, "description": "Os dados do gráfico de domínios são perfeitamente visíveis por estarem bem distribuídos", "name" : "q_10"},
    {"number": 11, "description": "Os dados do gráfico de dimensões são perfeitamente visíveis por estarem bem distribuídos", "name" : "q_11"},
    {"number": 12, "description": "O gráfico de domínios estava correto", "name" : "q_12"},
    {"number": 13, "description": "O gráfico de dimensões estava correto", "name" : "q_13"},
    {"number": 14, "description": "Os termos utilizados pelo sistema são semelhantes aos encontrados no PAGe", "name" : "q_14"},
    {"number": 15, "description": "O sistema informatizado pode substituir a utilização do instrumento de análise multidimensional impresso em papel", "name" : "q_15"},
    {"number": 16, "description": "Será muito benéfico para o Gerontólogo utilizar sistemas informatizados ao invés de documentos impressos em papel", "name" : "q_16"},
    {"number": 17, "description": "O sistema deixa claro a sequência em que o usuário deve realizar as tarefas", "name" : "q_17"},
    {"number": 18, "description": "O sistema mantém o usuário informado através de feedback das ações realizadas", "name" : "q_18"},
    {"number": 19, "description": "O sistema mantém o usuário informado sobre os erros que ocorreram", "name" : "q_19"},
    {"number": 20, "description": "O sistema adota um padrão de cores semelhante ao encontrado no PAGe", "name" : "q_20"},
    {"number": 21, "description": "A interface do sistema é muito complicada e difícil de entender", "name" : "q_21"},
    {"number": 22, "description": "A interface do sistema apresenta um grande número de informações desnecessárias", "name" : "q_22"},
    {"number": 23, "description": "As mensagens apresentadas pelo sistema são difíceis de entender", "name" : "q_23"},
    {"number": 24, "description": "Os campos que devem ser preenchidos pelo usuário estão evidentes na tela", "name" : "q_24"},
    {"number": 25, "description": "O sistema deixa bem claro o tipo de dado com que os campos devem ser preenchidos", "name" : "q_25"}
    ]

    opcoes = [
      {"value" : "1", "description" : "Concordo totalmente"},
      {"value" : "2", "description" : "Concordo parcialmente"},
      {"value" : "3", "description" : "Não concordo nem discordo"},
      {"value" : "4", "description" : "Discordo parcialmente"},
      {"value" : "5", "description" : "Discordo totalmente"}
    ]


  // variáveis booleans que controlam as mensagens de certo e errado no final do form
  public errado: boolean = false;
  public branco: boolean = true;
  
  // método que verifica se o form está válido
  formValido(): Boolean{
    this.branco = this.checaCampo.branco(this.avaliationForm);
    this.errado = this.checaCampo.errado(this.avaliationForm);
    return this.avaliationForm.valid;
  }

  //Verifica e muda a figura de status de cada campo
  mudou(campo : string) {
    return this.checaCampo.status(this.avaliationForm.get(campo));
  }

  constructor(private checaCampo: ChecaCampo, private avaliacaoform : AvaliacaoForm ,
    private pageService : PageService, private router: Router,
    private dao : DAOService){ }

  ngOnInit() { 
    this.participant = this.pageService.participant;
    console.log(this.participant);
    this.avaliationForm = this.avaliacaoform.geraFormGroup();
  }

  submit() { 
    this.dao.postObject(REST_URL_AVALIACAO, this.avaliationForm.getRawValue()).subscribe((data: any) => {
      alert('Obrigado, sua participação é muito importante'); 
      this.router.navigate(['private']);          
    }, error => {
      alert('Não foi possível gravar os dados da avaliação'); 
    }); 
  }

  voltar(){
    this.router.navigate(['private']); 
  }
 
}
