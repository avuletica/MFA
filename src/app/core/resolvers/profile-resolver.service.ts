import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {UserService} from '../services/user/user.service';
import {UserModel} from '../models/user.model';

@Injectable()
export class ProfileResolverService implements Resolve<UserModel> {
  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<UserModel> {
    const username = localStorage.getItem('username');

    return this.userService.getUserInformation(username);

  }
}
