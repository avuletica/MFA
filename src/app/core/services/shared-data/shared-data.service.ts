import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedDataService {
  private jwtToken = new BehaviorSubject<string>('');

  // Using asObservable to prevent new values being pushed to the BehaviorSubject from outside the service
  public currentJwtToken = this.jwtToken.asObservable();

  getJwtToken(): string {
    return this.jwtToken.getValue();
  }

  updateJwtToken(token: string) {
    this.jwtToken.next(token);
  }

  constructor() { }

}
