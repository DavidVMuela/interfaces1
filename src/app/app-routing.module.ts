import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RutasComponent } from './rutas/rutas.component';

const routes: Routes = [

  {
    path:'ruta',
    component: RutasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
