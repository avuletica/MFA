import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  readonly restServiceApiUrl = 'http://localhost:8080';
  readonly loginEndpoint = '/login';
  readonly signupEndpoint = '/users/sign-up';
  readonly authTokenKey = 'authToken';
  redirectUrl: string;

  constructor(private http: HttpClient, private router: Router) {

  }

  public login(username: string, password: string): Observable<any> {
    const user = {
      'username': username,
      'password': password
    };
    return this.http.post<any>(this.restServiceApiUrl + this.loginEndpoint, user, {observe: 'response'})
      .do(res => this.setSession(res))
      .shareReplay();
  }

  public signup(username: string, password: string): Observable<any> {
    const user = {
      'username': username,
      'password': password
    };

    console.log(user);
    return this.http.post<any>(this.restServiceApiUrl + this.signupEndpoint, user)
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
    const extractToken = authResult.headers.get('authorization').split(' ')[1];
    console.log(extractToken);

    if (authResult) {
      localStorage.setItem(this.authTokenKey, extractToken);
      this.redirectUrl ? this.router.navigate([this.redirectUrl]) : this.router.navigate(['/home']);
      this.redirectUrl = null;
    }
  }

  private removeSession(): void {
    localStorage.removeItem(this.authTokenKey);
  }

}
