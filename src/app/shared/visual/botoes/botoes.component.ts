import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PageService } from '../../services/page.service';

@Component({
  selector: 'app-botoes',
  templateUrl: './botoes.component.html'
})
export class BotoesComponent implements OnInit {

  @Input() valido: boolean;
  @Input() pageForm : FormGroup;

  constructor(private pageService: PageService) { }

  ngOnInit(): void {
  }

  gravar(): void{
    this.pageService.submit(this.pageForm);
  }

}
