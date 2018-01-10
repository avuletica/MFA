import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth/auth.service';
import {NotificationService} from '../../../core/services/notification/notification.service';
import {isNullOrUndefined} from 'util';
import {UserModel} from '../../../core/models/user.model';

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
              private router: Router,
              private formBuilder: FormBuilder,
              public notificationService: NotificationService) { }

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
    const user = new UserModel();
    user.username = this.username;
    user.password = this.password;

    this.authService.login(user).subscribe(
      res => {
        if (res.status === 200) {
          this.authService.setSession(res);
          this.authService.getUserInformation(this.username).subscribe(res1 => console.log('res: ', res1));
        }
      },
      err => {
        if (err.status === 401) {
          this.notificationService.openSnackBar(err.error.message, '');
        } else if (isNullOrUndefined(err.error.message)) {
          this.notificationService.openSnackBar('Authentication server is unavailable', '');
        }
      }
    );
  }

}
