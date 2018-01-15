import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialComponentsModule} from './material-components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {LoginFormComponent} from '../forms/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    FlexLayoutModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    FlexLayoutModule,
    LoginFormComponent,
  ],
  declarations: [
    LoginFormComponent,
  ]
})
export class SharedModule {
}
