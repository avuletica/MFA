import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../../core/services/notification/notification.service';
import {Router} from '@angular/router';
import {UserService} from '../../../../core/services/user/user.service';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {SharedDataService} from '../../../../core/services/shared-data/shared-data.service';
import {UserModel} from '../../../../core/models/user.model';

@Component({
  selector: 'app-secret-question',
  templateUrl: './secret-question.component.html',
  styleUrls: ['./secret-question.component.css']
})
export class SecretQuestionComponent implements OnInit {
  secretQuestionFormGroup: FormGroup;
  inputSecretQuestion: string;

  constructor(private authService: AuthService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              public notificationService: NotificationService,
              public sharedDataService: SharedDataService) {
  }

  ngOnInit() {
    this.inputSecretQuestion = '';
    this.secretQuestionFormGroup = this.formBuilder.group({
      inputSecretQuestion: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.userService.validateSecretQuestionAnswer(this.inputSecretQuestion, this.sharedDataService.getUsername()).subscribe(
      response => {
        response === true ?
          this.attemptLogin() :
          this.notificationService.openSnackBar('Invalid secret question answer', 'OK');
      }
    );
  }

  attemptLogin() {
    const user = new UserModel();
    user.username = this.sharedDataService.getUsername();
    user.password = this.sharedDataService.getPassword();

    this.authService.login(user).subscribe(
      response => {
        if (response.status === 200) {
          const token = this.authService.extractJwtToken(response);
          this.sharedDataService.setJwtToken(token);
          this.authService.setSession(this.sharedDataService.getJwtToken());
          localStorage.setItem('username', user.username);
          this.router.navigate(['/profile']);
        }
      }
    );
  }

}
