import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SharedDataService} from '../../../../core/services/shared-data/shared-data.service';
import {AuthService} from '../../../../core/services/auth/auth.service';
import {UserService} from '../../../../core/services/user/user.service';
import {NotificationService} from '../../../../core/services/notification/notification.service';

import 'rxjs/add/operator/map';
import {Router} from '@angular/router';

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
              public notificationService: NotificationService) {
  }

  ngOnInit() {
    this.inputCode = '';
    this.dataFromServer = [];

    this.backupFormGroup = this.formBuilder.group({
      inputCode: ['', Validators.required]
    });
  }

  onSubmit(): void {
    let backupCodes;

    // TODO: delete used code on success @ backend

    this.userService.getUserBackupCodes(localStorage.getItem('username')).subscribe(
      response => {
        backupCodes = response;
        backupCodes = backupCodes.map(item => item.code);
        console.log(backupCodes);
      },
      error => this.authService.removeSession(),
      () => {
        if (!backupCodes.includes(this.inputCode)) {
          this.notificationService.openSnackBar('Invalid backup code', '');
          this.authService.removeSession();
        } else {
          this.router.navigate(['/profile']);
        }
      }
    );

  }

}
