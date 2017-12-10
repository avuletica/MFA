import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {SecurityModel} from '../models/security.model';
import {Router} from '@angular/router';
import {UserModel} from '../models/user.model';

@Injectable()
export class UserService {
  readonly restServiceApiUrl = 'http://localhost:8080';
  readonly getUserInformationEndpoint = '/api/security/user';

  constructor(private http: HttpClient) {

  }

  public getUserInformation(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(this.restServiceApiUrl + this.getUserInformationEndpoint + '/' + username);

  }

}
