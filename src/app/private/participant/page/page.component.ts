import { Component,  OnInit} from '@angular/core';
import {Participant} from '../../../shared/models/participant.model';
import { PageService } from '../../../shared/services/page.service';
import { PageForm} from '../../../shared/forms/page.form';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-page',
  templateUrl: './page.component.html'
})
export class PageComponent implements OnInit {
  isOptional : boolean;

  get page() { return this.pageService.page; }


  constructor(private pageService: PageService, private pf: PageForm, private router: Router) { }

  pageForm : FormGroup;
  participant : Participant;

  ngOnInit(): void {
    this.participant = this.pageService.participant;
    console.log(this.pageService.page.id)
    if (this.pageService.page.id == 0){
        this.pageForm = this.pf.geraFormGroup();
    } else {
      this.pageForm = this.pf.geraFormGroup(this.pageService.page);
    }
    console.log(this.pageForm);
    if (this.pageForm.valid) {
      console.log('valido');
      this.isOptional = true;
    } else {
      this.isOptional = false;
      console.log('valido');
    }
  }

  salvar(){
    this.pageService.submit(this.pageForm);    
    alert('PAGe salvo com sucesso!!');
    this.router.navigate(['private/']).then();
  }

  cancelar(){
    if (window.confirm("Confirma o cancelamento da edição do PAGe? As alterações realizadas serão descartadas."))
      this.router.navigate(['private/']).then();
  }
}
