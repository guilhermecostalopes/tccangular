import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import localeBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UsuarioModule } from './interface/usuario/usuario.module';
import { GrupoModule } from './interface/grupo/grupo.module';

import { PrincipalComponent } from './interface/principal/principal.component';

import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID } from '@angular/core';

registerLocaleData(localeBr);

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GrupoModule,
    UsuarioModule,
    PrimeNgModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
