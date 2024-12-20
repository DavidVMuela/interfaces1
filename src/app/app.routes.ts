import { Routes } from "@angular/router";

export const routes: Routes =[
{path:'rutas',loadChildren:()=>import('./rutas/rutas.module').then(rut=>rut.RutasModule)}
]