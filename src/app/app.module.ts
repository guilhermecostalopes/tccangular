import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

import { UsuarioModule } from './interface/usuario/usuario.module';
import { GrupoModule } from './interface/grupo/grupo.module';

import localeBr from '@angular/common/locales/pt';
registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GrupoModule,
    UsuarioModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
