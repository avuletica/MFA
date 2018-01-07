import {Injectable} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';
import {UserModel} from '../../models/user.model';
import {isNullOrUndefined} from 'util';
import {endpoints} from '../../utils/endpoints';

@Injectable()
export class AuthService {
  readonly authTokenKey = 'authToken';
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(user: UserModel): Observable<HttpResponse<UserModel>> {
    return this.http.post<UserModel>(endpoints().auth.login, user, {observe: 'response'});
  }

  public signup(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(endpoints().auth.signup, user);
  }

  public getUserInformation(username: string): Observable<UserModel> {
    return this.http.get<UserModel>(endpoints().auth.user + '/' + username);
  }

  public getAuthToken(): string {
    console.log(localStorage.getItem(this.authTokenKey));
    return localStorage.getItem(this.authTokenKey);
  }

  public logout(): void {
    this.router.navigate(['/home']);
    this.removeSession();
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  public setSession(authResult: any): void {
    let extractToken;

    if (!isNullOrUndefined(authResult.headers)) {
      extractToken = authResult.headers.get('authorization').split(' ')[1];
    }

    if (authResult && extractToken) {
      localStorage.setItem(this.authTokenKey, extractToken);
      // this.redirectUrl ? this.router.navigate([this.redirectUrl]) : this.router.navigate(['/home']);
      this.redirectUrl = null;
    }
  }

  public removeSession(): void {
    localStorage.removeItem(this.authTokenKey);
  }

}
