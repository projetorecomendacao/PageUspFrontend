import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  //private accessToken: string = null;

  constructor(private userService : UserService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cab = this.userService.userGoogle.authToken;
    
    //this.injector.get(SocialAuthService).authState.subscribe(data => {
    //  this.accessToken = data.authToken;
    //});

    //console.log(this.accessToken)
    //if (this.accessToken != null) {
    //  cab = this.accessToken
    //}

    const headers = new HttpHeaders({
      Authorization: `Bearer google-oauth2 ${cab}`
    });
    const authRequest = request.clone(
      { headers }
    );
    return next.handle(authRequest);
  }
}
