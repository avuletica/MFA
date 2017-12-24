import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../models/user.model';
import {isNullOrUndefined} from 'util';

@Injectable()
export class AuthService {
  readonly restServiceApiUrl = 'http://localhost:8080';
  readonly loginEndpoint = '/login';
  readonly signupEndpoint = '/users/sign-up';
  readonly authTokenKey = 'authToken';
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(user: UserModel): Observable<HttpResponse<UserModel>> {
    return this.http.post<UserModel>(this.restServiceApiUrl + this.loginEndpoint, user, {observe: 'response'})
      .do(res => this.setSession(res))
      .shareReplay();
  }

  public signup(user: UserModel): Observable<UserModel> {
    console.log(user);
    return this.http.post<UserModel>(this.restServiceApiUrl + this.signupEndpoint, user)
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

  private setSession(authResult: any): void {
    let extractToken;

    if (!isNullOrUndefined(authResult.headers)) {
      extractToken = authResult.headers.get('authorization').split(' ')[1];
    }

    if (authResult && extractToken) {
      localStorage.setItem(this.authTokenKey, extractToken);
      this.redirectUrl ? this.router.navigate([this.redirectUrl]) : this.router.navigate(['/home']);
      this.redirectUrl = null;
    }
  }

  private removeSession(): void {
    localStorage.removeItem(this.authTokenKey);
  }

}
