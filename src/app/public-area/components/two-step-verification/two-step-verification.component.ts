import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-step-verification',
  templateUrl: './two-step-verification.component.html',
  styleUrls: ['./two-step-verification.component.css']
})
export class TwoStepVerificationComponent implements OnInit {
  selectedAuthentication: string;

  authenticationChoices = [
    'Secret question',
    'Backup code',
    'SMS code',
    'Mobile token',
    'QR token'
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
