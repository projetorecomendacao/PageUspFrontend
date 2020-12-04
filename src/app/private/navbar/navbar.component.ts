import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/security/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  sair(){
  }

  public desenvolvedor(): boolean {
    return (this.userService.getEmail() == 'laurentino.dantas@usp.br' || this.userService.getEmail() == 'ruth.melo@usp.br');
  }

}
