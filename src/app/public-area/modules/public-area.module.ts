import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/modules/shared.module';
import {PublicAreaRoutingModule} from './public-area-routing.module';
import {LoginComponent} from '../components/login/login.component';
import {ContactComponent} from '../components/contact/contact.component';
import {HomeComponent} from '../components/home/home.component';
import {SignupComponent} from '../components/signup/signup.component';
import {TwoStepVerificationComponent} from '../components/two-step-verification/two-step-verification.component';
import {BackupCodeComponent} from '../components/two-step-verification/backup-code/backup-code.component';
import {MobileTokenComponent} from '../components/two-step-verification/mobile-token/mobile-token.component';
import {QrCodeComponent} from '../components/two-step-verification/qr-code/qr-code.component';
import {SmsCodeComponent} from '../components/two-step-verification/sms-code/sms-code.component';
import {SecretQuestionComponent} from '../components/two-step-verification/secret-question/secret-question.component';

@NgModule({
  imports: [
    SharedModule,
    PublicAreaRoutingModule
  ],
  declarations: [
    HomeComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    TwoStepVerificationComponent,
    BackupCodeComponent,
    SecretQuestionComponent,
    MobileTokenComponent,
    QrCodeComponent,
    SmsCodeComponent
  ]
})
export class PublicAreaModule {
}
