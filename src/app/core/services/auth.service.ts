import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor() {
  }

  public login(username: string, password: string): boolean {
    return !!(username && password);
  }

}
