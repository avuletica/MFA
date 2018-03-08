import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {NotificationService} from '../../../../core/services/notification/notification.service';
import {Router} from '@angular/router';
import {UserService} from '../../../../core/services/user/user.service';
import {AuthService} from '../../../../core/services/auth/auth.service';

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
              public notificationService: NotificationService) {
  }

  ngOnInit() {
    this.inputSecretQuestion = '';
    this.secretQuestionFormGroup = this.formBuilder.group({
      inputSecretQuestion: ['', Validators.required]
    });
  }

  onSubmit(): void {


  }

}
