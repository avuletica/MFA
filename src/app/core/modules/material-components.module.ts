import {NgModule} from '@angular/core';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatProgressBarModule, MatStepperModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  imports:
    [
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatIconModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatStepperModule,
      MatCardModule,
      MatListModule,
      MatProgressBarModule
    ],
  exports:
    [
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatIconModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatSnackBarModule,
      MatStepperModule,
      MatCardModule,
      MatListModule,
      MatProgressBarModule
    ],
})
export class MaterialComponentsModule {
}
