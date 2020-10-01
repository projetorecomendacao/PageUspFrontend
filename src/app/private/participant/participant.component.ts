import { Component, OnInit } from '@angular/core';
import { Participant } from '../../shared/models/participant.model';

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html'
})
export class ParticipantComponent implements OnInit {

  private participant: Participant;

  constructor() { }

  ngOnInit() { }

}
