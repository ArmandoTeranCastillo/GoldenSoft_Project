import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { VigilanteInterceptor } from './vigilante.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule //Importar modulos del Core
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: VigilanteInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
