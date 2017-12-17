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
  readonly loginEndpoint = '/login';
  readonly signupEndpoint = '/users/sign-up';
  readonly authTokenKey = 'authToken';
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {

  }

  public login(username: string, password: string): Observable<SecurityModel> {
    return this.http.post<SecurityModel>(this.restServiceApiUrl + this.loginEndpoint, {username, password})
      .do(res => this.setSession(res))
      .shareReplay();
  }

  public signup(username: string, password: string): Observable<any> {
    return this.http.post<UserModel>(this.restServiceApiUrl + this.signupEndpoint, {username, password})
      .do(res => this.setSession(res))
      .shareReplay();
  }

  public logout(): void {
    this.router.navigate(['/home']);
    this.removeSession();
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  private setSession(authResult: SecurityModel): void {
    if (authResult) {
      localStorage.setItem(this.authTokenKey, authResult.authToken);
      this.redirectUrl ? this.router.navigate([this.redirectUrl]) : this.router.navigate(['/home']);
      this.redirectUrl = null;
    }
  }

  private removeSession(): void {
    localStorage.removeItem(this.authTokenKey);
  }

}
