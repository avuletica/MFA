import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NotificationService} from '../../../core/services/notification/notification.service';

@Component({
  selector: 'app-two-step-verification',
  templateUrl: './two-step-verification.component.html',
  styleUrls: ['./two-step-verification.component.css']
})
export class TwoStepVerificationComponent implements OnInit {
  selectedAuthentication: string;

  authenticationChoices: Array<string>;

  constructor(private router: Router, public notificationService: NotificationService) {
  }

  ngOnInit() {
    this.selectedAuthentication = '';
    this.authenticationChoices = [
      'Secret question',
      'Backup code',
      'SMS code',
      'QR code',
      'Mobile token',
    ];
  }

  onAuthenticationSubmit() {
    switch (this.selectedAuthentication) {
      case 'Secret question': {
        this.router.navigate(['two-step-verification/secret-question']);
        break;
      }
      case 'Backup code': {
        this.router.navigate(['two-step-verification/backup-code']);
        break;
      }
      case 'SMS code': {
        this.router.navigate(['two-step-verification/sms-code']);
        break;
      }
      case 'QR code': {
        this.router.navigate(['two-step-verification/qr-code']);
        break;
      }
      case 'Mobile token': {
        this.router.navigate(['two-step-verification/mobile-token']);
        break;
      }
      default:
        this.notificationService.openSnackBar('Please select verification method', 'OK');
    }

  }

}
