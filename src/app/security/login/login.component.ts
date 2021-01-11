import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider } from 'angularx-social-login';
import {AuthGuard} from '../auth.guard';
import {Router} from '@angular/router';
import { REST_URL_EXPERTS } from '../../shared/constantes/REST_API_URLs';
import { DAOService } from 'src/app/shared/services/dao.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService: SocialAuthService, 
    private router: Router, 
    private authGuard: AuthGuard, 
    private dao: DAOService,
    private userService : UserService) { }

  ngOnInit() {
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      userData => {
        //console.log(userData);
        this.userService.logado = true;
        this.userService.userGoogle = userData;
        this.dao.postObject(REST_URL_EXPERTS, {}).subscribe((data : any) => {
          if (data.id != -1) {
            this.userService.user = data;
            this.authGuard.setCanLoad(true);
            this.router.navigate(['/private']);
          } else {
            alert('Usuário não autorizado...');
          }
        });
      },
      rejection => {
        this.authGuard.setCanLoad(false);
        console.error(rejection);
      }
    );
  }
}
