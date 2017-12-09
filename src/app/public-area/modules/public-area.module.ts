import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {PublicAreaRoutingModule} from './public-area-routing.module';
import {LoginComponent} from '../components/login/login.component';
import {NewsComponent} from '../components/news/news.component';
import {ContactComponent} from '../components/contact/contact.component';
import {HomeComponent} from '../components/home/home.component';
import {LogoutComponent} from '../components/logout/logout.component';

@NgModule({
  imports: [
    SharedModule,
    PublicAreaRoutingModule
  ],
  declarations: [
    HomeComponent,
    NewsComponent,
    ContactComponent,
    LoginComponent,
    LogoutComponent
  ]
})
export class PublicAreaModule {
}
