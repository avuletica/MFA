import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {UserService} from '../../../core/services/user/user.service';
import {BackupCodeModel} from '../../../core/models/backup-code.model';
import {CodeModel} from '../../../core/models/code.model';

@Component({
  selector: 'app-backup-code-dialog',
  templateUrl: './backup-code-dialog.component.html',
  styleUrls: ['./backup-code-dialog.component.css']
})
export class BackupCodeDialogComponent implements OnInit {
  backupCodes;

  constructor(private userService: UserService, public dialogRef: MatDialogRef<BackupCodeDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.userService.getUserBackupCodes(localStorage.getItem('username')).subscribe(response => {
      this.backupCodes = response;
      this.backupCodes = this.backupCodes.map(item => item.code);
    });
  }

}
