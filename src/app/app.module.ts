import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

import { UsuarioModule } from './interface/usuario/usuario.module';
import { GrupoModule } from './interface/grupo/grupo.module';

import localeBr from '@angular/common/locales/pt';
import { PrincipalComponent } from './interface/principal/principal.component';

import { SidebarModule } from 'primeng/sidebar';
import { FieldsetModule } from 'primeng/primeng';

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
    SidebarModule,
    FieldsetModule
  ],
  exports: [
    SidebarModule,
    FieldsetModule
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
