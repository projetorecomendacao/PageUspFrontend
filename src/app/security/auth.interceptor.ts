import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { AuthService } from 'angularx-social-login';
import { catchError} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private accessToken: string = null;

  constructor(private injector: Injector) {
    injector.get(AuthService).authState.subscribe(data => {
      this.accessToken = data.authToken;
    });
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let cab ='';
    if (this.accessToken != null) {
      cab = this.accessToken
    }
    const headers = new HttpHeaders({
      Authorization: `Bearer google-oauth2 ${cab}`
    });
    const authRequest = request.clone(
      { headers }
    );
    return next.handle(authRequest).pipe(catchError(err => {
      if(err instanceof HttpErrorResponse) {
        if(err.status === 400) {
          // Handle unauthorized error
          // console.log("Unauthorized");
          // logout() user
        } else if(err.status === 500) {
          // Handler internal server error
          // console.log("Server is not responding.")
          // alert("Try after some time.")
        }
        // ......
      }
      return new Observable<HttpEvent<any>>();
    }));
    
  }
}
