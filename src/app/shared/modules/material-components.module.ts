import {NgModule} from '@angular/core';

import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatListModule} from '@angular/material/list';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  imports:
    [],
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
      MatProgressBarModule,
      MatExpansionModule,
      MatSlideToggleModule,
      MatDialogModule,
      MatRadioModule
    ],
})
export class MaterialComponentsModule {
}
