import {NgModule} from '@angular/core';

import {environment} from '../environments/environment';
import {CoreModule} from './core/core.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {NavigationComponent} from './components/navigation/navigation.component';
import {MaterialComponentsModule} from './shared/modules/material-components.module';
import {PublicAreaModule} from './public-area/modules/public-area.module';
import {PrivateAreaModule} from './private-area/modules/private-area.module';
import {BackupCodeDialogComponent} from './private-area/components/backup-code-dialog/backup-code-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent
  ],
  imports: [
    CoreModule,
    PrivateAreaModule,
    PublicAreaModule,
    MaterialComponentsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  entryComponents: [
    BackupCodeDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
