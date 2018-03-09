import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedDataService} from '../../../../core/services/shared-data/shared-data.service';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {UserService} from '../../../../core/services/user/user.service';
import {NotificationService} from '../../../../core/services/notification/notification.service';

import 'rxjs/add/operator/map';
import {Router} from '@angular/router';
import {isNullOrUndefined} from "util";
import {UserModel} from '../../../../core/models/user.model';

@Component({
  selector: 'app-backup-code',
  templateUrl: './backup-code.component.html',
  styleUrls: ['./backup-code.component.css']
})
export class BackupCodeComponent implements OnInit {
  backupFormGroup: FormGroup;
  dataFromServer: Array<string>;
  inputCode: string;

  constructor(private authService: AuthService,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router,
              public notificationService: NotificationService,
              public sharedDataService: SharedDataService) {
  }

  ngOnInit() {
    this.inputCode = '';
    this.dataFromServer = [];

    this.backupFormGroup = this.formBuilder.group({
      inputCode: ['', Validators.required]
    });
  }

  onSubmit(): void {
    this.userService.validateBackupCode(this.inputCode, this.sharedDataService.getUsername()).subscribe(
      response => {
        if (response === true) {
          this.attemptLogin();
        } else {
          this.notificationService.openSnackBar('Invalid backup code', 'OK');
        }
      }
    );

  }

  attemptLogin(): void {
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
