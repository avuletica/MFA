import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/modules/shared.module';
import {PublicAreaRoutingModule} from './public-area-routing.module';
import {LoginComponent} from '../components/login/login.component';
import {ContactComponent} from '../components/contact/contact.component';
import {HomeComponent} from '../components/home/home.component';
import {SignupComponent} from '../components/signup/signup.component';

@NgModule({
  imports: [
    SharedModule,
    PublicAreaRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class PublicAreaModule {
}
