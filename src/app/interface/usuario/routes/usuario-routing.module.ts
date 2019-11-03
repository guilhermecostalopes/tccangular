import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const moduleRoutes: Routes = [];

@NgModule({
    exports: [RouterModule],
    imports: [
    RouterModule.forRoot(moduleRoutes,
      {
        useHash: true,
        enableTracing: false
      })
    ],
    providers: [],
    declarations: []
})
export class ConfiguracaoRoutingModule { }
