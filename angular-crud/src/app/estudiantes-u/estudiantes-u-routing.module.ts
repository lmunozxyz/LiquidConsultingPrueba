import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EstudiantesUComponent } from './estudiantes-u.component';

const routes: Routes = [{ path: '', component: EstudiantesUComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesURoutingModule { }
