import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { REST_URL_ORIENTADOR } from 'src/app/shared/constantes/REST_API_URLs';
import { Orientando } from 'src/app/shared/models/orientandos';
import { DAOService } from 'src/app/shared/services/dao.service';

@Component({
  selector: 'app-orientador-usp',
  templateUrl: './orientador-usp.component.html'
})
export class OrientadorUspComponent implements OnInit {

  participants : Orientando[] = new Array <Orientando>(); 

  constructor(private dao: DAOService, private router: Router) { }

  ngOnInit(): void {
    this.dao.getObjects(REST_URL_ORIENTADOR).subscribe((data: Orientando[]) => {
      console.log(data)
      this.participants = data;
    }, erro => {
      alert('Não foi possível acessar os dados');
      this.router.navigate(['private']).then();
    });

  }

  addParticipant(id : number){
    this.router.navigate(['private/orientadorEdit',id]).then();
  }

  goPages(id : number){
    this.router.navigate(['private/orientadorListPage',id]).then();
  }

  voltar(){
    this.router.navigate(['private']).then();
  }
}
