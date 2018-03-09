import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../core/services/user/user.service';
import {UserModel} from '../../../core/models/user.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {BackupCodeDialogComponent} from '../backup-code-dialog/backup-code-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInformation: UserModel;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isLinear: boolean;

  constructor(private route: ActivatedRoute,
              private _formBuilder: FormBuilder,
              private userService: UserService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.isLinear = true;
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });

    this.userInformation = this.route.snapshot.data['userData'];

  }

  generateBackupCodes(): void {
    this.userService.generateBackupCodes(localStorage.getItem('username')).subscribe(res => console.log(res));
  }

  openBackCodeDialog(): void {
    const dialogRef = this.dialog.open(BackupCodeDialogComponent, {width: '200px'});

    dialogRef.afterClosed().subscribe();
  }

  toggleTwoFactorAuthentication(): void {
    this.userService.updateTwoFactorAuthenticationActiveState(localStorage.getItem('username'),
      !this.userInformation.twoFactorAuthenticationActive).subscribe();
  }

}
