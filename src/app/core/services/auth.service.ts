import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SecurityModel} from '../models/security.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../models/user.model';

@Injectable()
export class AuthService {
  readonly restServiceApiUrl = 'http://localhost:8080';
  readonly loginEndpoint = '/api/security/login';
  readonly userKey = 'username';
  loggedIn: boolean;
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {
    this.loggedIn = false;
  }

  public login(username: string, password: string): Observable<SecurityModel> {
    return this.http.post<SecurityModel>(this.restServiceApiUrl + this.loginEndpoint, {username, password})
      .do(res => this.setSession(res))
      .shareReplay();
  }

  public logout(): void {
    this.loggedIn = false;
    this.router.navigate(['/home']);
    localStorage.clear();
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  private setSession(authResult: UserModel): void {
    if (authResult) {
      localStorage.setItem(this.userKey, authResult.username);
      this.loggedIn = true;
      this.redirectUrl ? this.router.navigate([this.redirectUrl]) : this.router.navigate(['/home']);
      this.redirectUrl = null;
    }
  }

}
