import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {UserModel} from '../../models/user.model';
import {endpoints} from '../../utils/endpoints';
import {BackupCodeModel} from '../../models/backup-code.model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }

  public getUserInformation(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(endpoints().user.information + '/' + username);
  }

  public getUserBackupCodes(username: string): Observable<BackupCodeModel> {
    return this.http.get<BackupCodeModel>(endpoints().user.backupCodes + '/' + username);
  }

  public generateBackupCodes(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(endpoints().user.generateBackupCodes + username);
  }

}
