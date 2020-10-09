import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html'
})
export class StatusComponent implements OnInit {
  @ Input() valido : boolean;
  @ Input() branco : boolean;
  @ Input() errado : boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
