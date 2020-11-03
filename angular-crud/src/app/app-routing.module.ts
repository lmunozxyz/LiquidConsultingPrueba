import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCarrerasComponent } from './carreras/lista-carreras/lista-carreras.component';

const routes: Routes = [
  { path: 'EstudiantesU', loadChildren: () => import('./estudiantes-u/estudiantes-u.module').then(m => m.EstudiantesUModule) },
  { path: 'carreras', component: ListaCarrerasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
