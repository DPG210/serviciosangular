import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { PersonasApiComponent } from './components/personas-api.component/personas-api.component';
import { ServicePersonas } from './services/service.personas';
import { PersonasStandAloneComponent } from './components/personas-stand-alone.component/personas-stand-alone.component';

@NgModule({
  declarations: [
    App,
    PersonasApiComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonasStandAloneComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    ServicePersonas
  ],
  bootstrap: [App]
})
export class AppModule { }
