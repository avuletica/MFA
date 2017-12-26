import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserModel} from '../../../core/models/user.model';
import {NotificationService} from '../../../core/services/notification/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  username: string;
  password: string;
  hide: boolean;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder,
              public notificationService: NotificationService) {
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
    const user = new UserModel();
    user.username = this.username;
    user.password = this.password;

    this.authService.login(user).subscribe(
      res => {
        if (res.status === 200) {
          this.authService.setSession(res);
        }
      },
      err => {
        if (err.status === 401) {
          this.notificationService.openSnackBar(err.error.message, '');
        }
      }
    );
  }

}
