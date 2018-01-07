import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-authentication-form',
  templateUrl: './authentication-form.component.html',
  styleUrls: ['./authentication-form.component.css']
})
export class AuthenticationFormComponent implements OnInit {
  backupCode: number;
  mobileToken: number;
  smsCode: number;

  constructor() {
  }

  ngOnInit() {
    this.backupCode = null;
    this.mobileToken = null;
    this.smsCode = null;
  }

  verifyBackupCode(): void {
    console.log(this.backupCode);
  }

  verifyMobileToken(): void {
    console.log(this.mobileToken);
  }

  verifySmsCode(): void {
    console.log(this.smsCode);
  }

}
