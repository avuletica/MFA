import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {SecurityModel} from '../models/security.model';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/shareReplay';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  readonly restServiceApiUrl = 'http://localhost:8080';
  readonly loginEndpoint = '/api/security/login';
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
  }

  public isLoggedIn(): boolean {
    return this.loggedIn;
  }

  private setSession(authResult): void {
    if (authResult) {
      this.loggedIn = true;
    }

    this.redirectUrl ? this.router.navigate([this.redirectUrl]) : this.router.navigate(['/home']);
  }

}
