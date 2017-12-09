import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PublicAreaRoutingModule} from './public-area-routing.module';
import {LoginComponent} from '../components/login/login.component';

@NgModule({
  imports: [
    SharedModule,
    PublicAreaRoutingModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class PublicAreaModule {
}
