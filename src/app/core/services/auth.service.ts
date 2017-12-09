import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {
  loggedIn: boolean;

  constructor() {
    this.loggedIn = false;
  }

  public login(username: string, password: string): boolean {
    return !username && !password;
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

}
