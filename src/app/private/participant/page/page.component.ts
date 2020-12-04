import { Component,  OnInit} from '@angular/core';
import {Participant} from '../../../shared/models/participant.model';
import { PageService } from '../../../shared/services/page.service';
import { PageForm} from '../../../shared/forms/page.form';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { REST_URL_PAGE } from 'src/app/shared/constantes/REST_API_URLs';
import { DAOService } from 'src/app/shared/services/dao.service';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  isOptional : boolean = true;

  get page() { return this.pageService.page; }


  constructor(private pageService: PageService, private pf: PageForm, private router: Router, private dao : DAOService) { }

  pageForm : FormGroup;
  participant : Participant;

  ngOnInit(): void {
    this.participant = this.pageService.participant;
    if (this.pageService.page.id == 0){
        this.pageForm = this.pf.geraFormGroup();
    } else {
      this.pageForm = this.pf.geraFormGroup(this.pageService.page);
    }
  }

  salvar(){
    var enviar = this.pageService.criaEnviar(this.pageForm);

    if (this.pageService.page.id <= 0){
      return this.dao.postObject(REST_URL_PAGE,enviar).subscribe((data:any)=>{
        this.pageService.page.id = data.id;
        alert('Foi criado um novo page com o Código: ' + data.id);
        this.router.navigate(['private/home']).then();        
      }, error => {
        alert('Problema na gravação do PAGe, tente novamente..');
      });
    } else {
      return this.dao.putObject(REST_URL_PAGE,enviar, this.pageService.page.id.toString()).subscribe((data:any)=>{
        alert('Foram gravados todos os dados do page Código: ' + this.pageService.page.id.toString());
        this.router.navigate(['private/home']).then();    
      },error => {
        alert('Problema na gravação do PAGe, tente novamente..');
      });
    }
  }

  cancelar(){
    if (window.confirm("Deseja sair da edição do PAGe?"))
      this.router.navigate(['private/home']).then();
  }

  valido():boolean{
    return this.pageForm.valid;
  }
}
