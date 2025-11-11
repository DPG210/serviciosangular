import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api.component/personas-api.component';
import { ServicePersonas } from './services/service.personas';
import { PersonasStandAloneComponent } from './components/personas-stand-alone.component/personas-stand-alone.component';
import { CochesComponent } from './components/coches.component/coches.component';
import { ServiceCoche } from './services/service.coche';

@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
    CochesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandAloneComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas,
    ServiceCoche
  ],
  bootstrap: [App]
})
export class AppModule { }
