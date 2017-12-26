import {Injectable} from '@angular/core';
import {MatSnackBar, MatSnackBarConfig, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';

@Injectable()
export class NotificationService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  autoHide = 2000;

  constructor(public snackBar: MatSnackBar) {
  }

  openSnackBar(message: string, action: string): void {
    const config = new MatSnackBarConfig();
    config.verticalPosition = this.verticalPosition;
    config.horizontalPosition = this.horizontalPosition;
    config.duration = this.autoHide;

    this.snackBar.open(message, action, config);
  }

}
