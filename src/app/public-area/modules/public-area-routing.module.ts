import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from '../components/login/login.component';
import {HomeComponent} from '../components/home/home.component';
import {ContactComponent} from '../components/contact/contact.component';
import {SignupComponent} from '../components/signup/signup.component';
import {TwoStepVerificationComponent} from '../components/two-step-verification/two-step-verification.component';
import {BackupCodeComponent} from '../components/two-step-verification/backup-code/backup-code.component';
import {MobileTokenComponent} from '../components/two-step-verification/mobile-token/mobile-token.component';
import {QrCodeComponent} from '../components/two-step-verification/qr-code/qr-code.component';
import {SmsCodeComponent} from '../components/two-step-verification/sms-code/sms-code.component';
import {SecretQuestionComponent} from '../components/two-step-verification/secret-question/secret-question.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'two-step-verification', component: TwoStepVerificationComponent},
  {path: 'two-step-verification/backup-code', component: BackupCodeComponent},
  {path: 'two-step-verification/mobile-token', component: MobileTokenComponent},
  {path: 'two-step-verification/qr-code', component: QrCodeComponent},
  {path: 'two-step-verification/sms-code', component: SmsCodeComponent},
  {path: 'two-step-verification/secret-question', component: SecretQuestionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PublicAreaRoutingModule {
}
