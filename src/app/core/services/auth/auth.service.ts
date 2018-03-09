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
  readonly userKey = 'username';
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {
  }

  public login(user: UserModel): Observable<HttpResponse<UserModel>> {
    return this.http.post<UserModel>(endpoints().auth.login, user, {observe: 'response'});
  }

  public signup(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(endpoints().auth.signup, user);
  }

  public getAuthToken(): string {
    return localStorage.getItem(this.authTokenKey);
  }

  public logout(): void {
    this.router.navigate(['/home']);
    this.removeSession();
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem(this.authTokenKey);
  }

  public setSession(token: string): void {
    if (token) {
      localStorage.setItem(this.authTokenKey, token);

      if (this.redirectUrl) {
        this.router.navigate([this.redirectUrl]);
      }
      this.redirectUrl = null;
    }
  }

  public extractJwtToken(data: any): string {
    let extractToken;

    if (!isNullOrUndefined(data.headers)) {
      extractToken = data.headers.get('authorization').split(' ')[1];
    }

    return extractToken;
  }

  public removeSession(): void {
    localStorage.removeItem(this.authTokenKey);
    localStorage.removeItem(this.userKey);
  }

}
