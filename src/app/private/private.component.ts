import { Component, Injector, OnInit } from '@angular/core';
import { UserService } from '../security/user.service';
import { timer } from 'rxjs';
import { SocialAuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html'
})
export class PrivateComponent implements OnInit {
  tempo = 30*60*1000 // são 30 minutos de tempo para dar refresh no token..
  numbers = timer(this.tempo);

  constructor(private userService: UserService, 
    private authService: SocialAuthService,
    private injector: Injector) { }

  ngOnInit() {  
      this.refreshTokenGoogle();
  }

  //O token google será renovado a cada 30 minutos..
  refreshTokenGoogle(){
    //this.numbers = timer(this.tempo)
    this.numbers.subscribe(x => {
      if (this.userService.logado){
        this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
        this.injector.get(SocialAuthService).authState.subscribe(data => {
          this.userService.userGoogle = data;
          console.log(this.userService.userGoogle.authToken)
        });      
        this.refreshTokenGoogle();
      }
    });  
  }

}
