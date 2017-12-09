import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PrivateAreaRoutingModule} from './private-area-routing.module';
import {ProfileComponent} from '../components/profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    PrivateAreaRoutingModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class PrivateAreaModule {
}
