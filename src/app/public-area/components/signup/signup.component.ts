import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth/auth.service';
import {UserModel} from '../../../core/models/user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup;
  username: string;
  password: string;
  hide: boolean;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.hide = true;
    this.username = '';
    this.password = '';
    this.signupFormGroup = this.formBuilder.group({
      username_f: ['', Validators.required],
      password_f: ['', Validators.required]
    });
  }

  onSignupSubmit(): void {
    const user = new UserModel();
    user.username = this.username;
    user.password = this.password;

    this.authService.signup(user).subscribe(
      res => {
        console.log(res);
        // TODO: set session && error handling
      }
    );
  }

}
