import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../core/services/auth.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide: boolean;
  username: string;
  password: string;

  constructor(public snackBar: MatSnackBar, private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.hide = true;
    this.username = '';
    this.password = '';
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
