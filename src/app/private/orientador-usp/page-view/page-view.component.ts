import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PageForm } from 'src/app/shared/forms/page.form';
import { Participant } from 'src/app/shared/models/participant.model';
import { DAOService } from 'src/app/shared/services/dao.service';
import { PageService } from 'src/app/shared/services/page.service';

@Component({
  selector: 'app-page-view',
  templateUrl: './page-view.component.html'
})
export class PageViewComponent implements OnInit {
  rota: string;
  id : number;
  pageForm : FormGroup;
  participant : Participant;

  constructor(private pageService: PageService, private pf: PageForm, private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.rota = this.activateRoute.snapshot.params['rota']
    this.id = this.activateRoute.snapshot.params['id']
    this.pageForm = this.pf.geraFormGroup(this.pageService.page);
    //this.pageForm.disable();
  }

  voltar(){
    if (this.id > -2) {
      this.router.navigate([this.rota,this.id]); 
    } else {
      this.router.navigate([this.rota]); 
    }
  }

}
