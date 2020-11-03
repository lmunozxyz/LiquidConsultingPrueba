import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstudiantesUComponent } from './estudiantes-u.component';
import { CreateEstudianteComponent } from './create-estudiante/create-estudiante.component';
import { UpdateEstudianteComponent } from './update-estudiante/update-estudiante.component';
import { DeleteEstudianteComponent } from './delete-estudiante/delete-estudiante.component';
import { ViewEstudianteComponent } from './view-estudiante/view-estudiante.component';
import { ViewAllEstudianteComponent } from './view-all-estudiante/view-all-estudiante.component';
import { ViewAllEstudianteByCategoryComponent } from './view-all-estudiante-by-category/view-all-estudiante-by-category.component';
import { ViewAllEstudianteByDateComponent } from './view-all-estudiante-by-date/view-all-estudiante-by-date.component';

const routes: Routes = [
  { path: '', component: ViewAllEstudianteComponent },
  { path: 'create-estudiante', component: CreateEstudianteComponent },
  { path: 'update-estudiante/:id', component: UpdateEstudianteComponent },
  { path: 'delete-estudiante/:id', component: DeleteEstudianteComponent },
  { path: 'view-estudiante/:id', component: ViewEstudianteComponent },
  { path: 'view-all-estudiante-by-category', component: ViewAllEstudianteByCategoryComponent },
  { path: 'view-all-estudiante-by-date', component: ViewAllEstudianteByDateComponent },
  { path: 'search', component: ViewAllEstudianteByCategoryComponent },
  { path: 'search-date', component: ViewAllEstudianteByDateComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesURoutingModule { }
