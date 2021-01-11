import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { IndexModule } from './index/index.module';
import { PrivateModule } from './private/private.module';
import { SecurityModule } from './security/security.module';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { SocialAuthServiceConfig, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { AuthGuard } from './security/auth.guard';
import { AuthInterceptor } from './security/auth.interceptor';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DAOService } from './shared/services/dao.service';
import { UserService } from './security/user.service';



//const config = new AuthServiceConfig([
//  {
//    id: GoogleLoginProvider.PROVIDER_ID,
//    provider: new GoogleLoginProvider('164416639233-1h26ajia8qontaalsev3v8cgblbdmvm4.apps.googleusercontent.com')
//  }
//]);

//export function provideConfig() {
//  return config;
//}



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    IndexModule,
    PrivateModule,
    SecurityModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [
    AuthGuard,
    DAOService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '164416639233-1h26ajia8qontaalsev3v8cgblbdmvm4.apps.googleusercontent.com'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
