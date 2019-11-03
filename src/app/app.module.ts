import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioPesquisarComponent } from './interface/usuario/view/usuario/usuario-pesquisar/usuario-pesquisar.component';
import { UsuarioFormularioComponent } from './interface/usuario/view/usuario/usuario-formulario/usuario-formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioPesquisarComponent,
    UsuarioFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
