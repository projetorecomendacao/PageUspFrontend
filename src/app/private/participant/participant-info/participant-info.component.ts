import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../../shared/models/participant.model';
import {Page} from '../../../shared/models/page.model';

@Component({
  selector: 'app-participant-info',
  templateUrl: './participant-info.component.html'
})
export class ParticipantInfoComponent implements OnInit {

  @Input() participant: Participant;

  constructor() { }

  ngOnInit() { }

}
