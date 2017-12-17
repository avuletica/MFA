import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {AuthService} from '../../../core/services/auth.service';

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

  constructor(public snackBar: MatSnackBar, private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
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

  }

}
