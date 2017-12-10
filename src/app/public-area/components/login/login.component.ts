import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(public snackBar: MatSnackBar, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
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
    let snackBarRef;
    this.authService.login(this.username, this.password).subscribe(
      res => res ?
        this.router.navigate(['/home']) :
        snackBarRef = this.snackBar.open('Login failed', 'Close', {duration: 1500}),
      () =>  snackBarRef = this.snackBar.open('Authorization server is offline', 'Close', {duration: 1500})
    );
  }

}
