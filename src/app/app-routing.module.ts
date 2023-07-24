import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Listasensores2Component } from './componentes/listasensores2/listasensores2.component';
import { Error404Component } from './componentes/error404/error404.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { InformacionComponent } from './componentes/informacion/informacion.component';

const routes: Routes = [
  { path: 'sensores', component: Listasensores2Component }, 
  { path: 'informacion', component: InformacionComponent },
  { path: '', component: InicioComponent },
  { path: '**', component: Error404Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
