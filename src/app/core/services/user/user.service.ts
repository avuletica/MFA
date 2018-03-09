import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {UserModel} from '../../models/user.model';
import {endpoints} from '../../utils/endpoints';
import {BackupCodeModel} from '../../models/backup-code.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }

  public getUserInformation(username: string): Observable<UserModel> {
    const authorization = `Bearer ${localStorage.getItem('authToken')}`;

    return this.http.get<UserModel>(endpoints().user.information + '/' + username,
      {headers: new HttpHeaders().set('Authorization', authorization)});
  }

  public getUserBackupCodes(username: string): Observable<BackupCodeModel> {
    const authorization = `Bearer ${localStorage.getItem('authToken')}`;

    return this.http.get<BackupCodeModel>(endpoints().user.backupCodes + '/' + username,
      {headers: new HttpHeaders().set('Authorization', authorization)});
  }

  public generateBackupCodes(username: string): Observable<UserModel> {
    const authorization = `Bearer ${localStorage.getItem('authToken')}`;

    return this.http.get<UserModel>(endpoints().user.generateBackupCodes + username,
      {headers: new HttpHeaders().set('Authorization', authorization)});
  }

  public getTwoFactorAuthenticationActiveState(username: string) {
    return this.http.get(endpoints().user.twoFactorAuthenticationActiveState + username);
  }

  public updateTwoFactorAuthenticationActiveState(username: string, state: boolean): Observable<UserModel> {
    const authorization = `Bearer ${localStorage.getItem('authToken')}`;

    return this.http.post<UserModel>(endpoints().user.updateTwoFactorAuthenticationActiveState + state + '/' + username,
      {}, {headers: new HttpHeaders().set('Authorization', authorization)});
  }

  public validateBackupCode(code: string, username: string): any {
    return this.http.get(endpoints().user.validateBackupCode + code + '/' + username, {});
  }

  public validateSecretQuestionAnswer(answer: string, username: string): any {
    return this.http.get(endpoints().user.validateSecretQuestionAnswer + answer + '/' + username, {});
  }

}
