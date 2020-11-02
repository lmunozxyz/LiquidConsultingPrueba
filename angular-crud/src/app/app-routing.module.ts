import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'EstudiantesU', loadChildren: () => import('./estudiantes-u/estudiantes-u.module').then(m => m.EstudiantesUModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
  