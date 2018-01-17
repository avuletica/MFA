import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/modules/shared.module';
import {PrivateAreaRoutingModule} from './private-area-routing.module';
import {ProfileComponent} from '../components/profile/profile.component';
import {ForumComponent} from '../components/forum/forum.component';
import {BackupCodeDialogComponent} from '../components/backup-code-dialog/backup-code-dialog.component';

@NgModule({
  imports: [
    SharedModule,
    PrivateAreaRoutingModule
  ],
  declarations: [
    ProfileComponent,
    ForumComponent,
    BackupCodeDialogComponent
  ]
})
export class PrivateAreaModule {
}
