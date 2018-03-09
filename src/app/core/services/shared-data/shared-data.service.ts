import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedDataService {
  private _jwtToken = new BehaviorSubject<string>('');
  private _username = new BehaviorSubject<string>('');
  private _password = new BehaviorSubject<string>('');

  // Using asObservable to prevent new values being pushed to the BehaviorSubject from outside the service
  public currentJwtToken = this._jwtToken.asObservable();
  public currentUsername = this._username.asObservable();
  public currentPassword = this._password.asObservable();

  constructor() {
  }

  getJwtToken(): string {
    return this._jwtToken.getValue();
  }

  setJwtToken(value: string) {
    this._jwtToken.next(value);
  }

  getUsername(): string {
    return this._username.getValue();
  }

  setUsername(value: string) {
    this._username.next(value);
  }

  getPassword(): string {
    return this._password.getValue();
  }

  setPassword(value: string) {
    this._password.next(value);
  }

}
