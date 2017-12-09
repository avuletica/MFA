import {NgModule} from '@angular/core';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports:
    [
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatIconModule,
      MatFormFieldModule,
      MatSidenavModule
    ],
  exports:
    [
      MatButtonModule,
      MatToolbarModule,
      MatInputModule,
      MatIconModule,
      MatFormFieldModule,
      MatSidenavModule
    ],
})
export class MaterialComponentsModule {
}
