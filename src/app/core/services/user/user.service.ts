import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/user.model';
import {endpoints} from '../../utils/endpoints';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }

  public getUserInformation(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(endpoints().auth.user + '/' + username);
  }

}
