import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth/auth.service';
import {NotificationService} from '../../../core/services/notification/notification.service';
import {isNullOrUndefined} from 'util';
import {UserModel} from '../../../core/models/user.model';
import {SharedDataService} from '../../../core/services/shared-data/shared-data.service';
import {UserService} from '../../../core/services/user/user.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginFormGroup: FormGroup;
  username: string;
  password: string;
  hide: boolean;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router,
              private formBuilder: FormBuilder,
              public notificationService: NotificationService,
              public sharedDataService: SharedDataService) {
  }

  ngOnInit() {
    this.hide = true;
    this.username = '';
    this.password = '';
    this.loginFormGroup = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLoginSubmit(): void {
    this.userService.getTwoFactorAuthenticationActiveState(this.username).subscribe(
      response => {
        if (response === true) {
          this.sharedDataService.setUsername(this.username);
          this.sharedDataService.setPassword(this.password);
          this.router.navigate(['/two-step-verification']);
        } else if (response === false) {
          this.attemptLogin();
        }
      },
      error => {
        if (error.status === 500) {
          this.notificationService.openSnackBar('Authentication failure', 'OK');
        }
      }
    );
  }

  attemptLogin(): void {
    const user = new UserModel();
    user.username = this.username;
    user.password = this.password;

    this.authService.login(user).subscribe(
      response => {
        if (response.status === 200) {
          const token = this.authService.extractJwtToken(response);
          this.sharedDataService.setJwtToken(token);
          this.authService.setSession(this.sharedDataService.getJwtToken());
          localStorage.setItem('username', this.username);
          this.router.navigate(['/profile']);
        }
      },
      error => {
        if (error.status === 401) {
          this.notificationService.openSnackBar(error.error.message, '');
        } else if (isNullOrUndefined(error.error.message)) {
          this.notificationService.openSnackBar('Authentication server is unavailable', '');
        }
      }
    );
  }

}
