import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  logado: boolean = false;
  private _user: User;
  userGoogle : UserGoogle;

  constructor() {
    //dao.postObject(REST_URL_EXPERTS + 'getSelf/', {}).subscribe((data : any) => {
    //  console.log(data)
    //  this._user = data
    //});
  }

  get user(): User { return this._user; }
  getId() { return this.user.id; }
  getName() { return this.user.name; }
  getEmail() {return this.user.email;}
  set user(user : User) { this._user = user}
}

export interface User {
  id: number; // Id do especialista....
  name: string;
  email : string;
}

export interface UserGoogle {
  authToken: string;
  email: string;
  firstName: string;
  id: string;
  idToken: string;
  lastName: string;
  name: string;
  photoUrl: string;
  provider: string;
}