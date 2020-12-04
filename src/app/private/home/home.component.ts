import { Component, OnInit } from '@angular/core';
import { Participant } from '../../shared/models/participant.model';
import { REST_URL_PARTICIPANTS } from '../../shared/constantes/REST_API_URLs';
import {PageService} from '../../shared/services/page.service';
import {Router} from '@angular/router';
import { ChecaCampo } from 'src/app/shared/services/checa-campo';
import { DAOService } from 'src/app/shared/services/dao.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private p: Participant;
  public participants: Participant[] = new Array<Participant>();

  constructor(private dao: DAOService, private pageService: PageService, private router: Router, private checaCampo: ChecaCampo) {
  }

  ngOnInit() {
    this.dao.getObjects(REST_URL_PARTICIPANTS).subscribe((data: Participant[]) => {
      for (const participant of data)
        this.participants.push(participant);
    });
  }

  goToParticipant(id: number) {
    this.pageService.reset();
    for(var i=0; i< this.participants.length; i++){
      if (this.participants[i].id == id ) {
        this.p = this.participants[i];
      }
    }
    console.log(this.p);
    this.pageService.participant = this.p;
    this.router.navigate(['private/participant']);
  }

  goToOrientandos(){
    this.router.navigate(['private/orientador']);
  }

  addParticipant(id : number){
    this.router.navigate(['private/participantEdit',id]);
  }

  voltar(){
    this.router.navigate(['private']).then();
  }

}
