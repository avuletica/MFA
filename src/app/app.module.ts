import {NgModule} from '@angular/core';

import {environment} from '../environments/environment';
import {CoreModule} from './core/modules/core.module';
import {ServiceWorkerModule} from '@angular/service-worker';
import {AppComponent} from './app.component';

import {NavigationComponent} from './components/navigation/navigation.component';
import {MaterialComponentsModule} from './core/modules/material-components.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
  ],
  imports: [
    CoreModule,
    MaterialComponentsModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
