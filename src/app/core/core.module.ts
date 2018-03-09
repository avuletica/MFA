import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AuthService} from './services/auth/auth.service';
import {AuthGuardService} from './guards/auth-guard.service';
import {UserService} from './services/user/user.service';
import {ProfileResolverService} from './resolvers/profile-resolver.service';
import {NotificationService} from './services/notification/notification.service';
import {SharedDataService} from './services/shared-data/shared-data.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    FlexLayoutModule
  ],
  declarations: [],
  providers: [
    AuthService,
    AuthGuardService,
    UserService,
    ProfileResolverService,
    NotificationService,
    SharedDataService,
  ],
})
export class CoreModule {
}
