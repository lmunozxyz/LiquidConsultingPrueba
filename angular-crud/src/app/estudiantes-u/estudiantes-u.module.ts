import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EstudiantesURoutingModule } from './estudiantes-u-routing.module';
import { EstudiantesUComponent } from './estudiantes-u.component';
import { CreateEstudianteComponent } from './create-estudiante/create-estudiante.component';
import { ViewEstudianteComponent } from './view-estudiante/view-estudiante.component';
import { ViewAllEstudianteComponent } from './view-all-estudiante/view-all-estudiante.component';
import { UpdateEstudianteComponent } from './update-estudiante/update-estudiante.component';
import { DeleteEstudianteComponent } from './delete-estudiante/delete-estudiante.component';
import { ViewAllEstudianteByDateComponent } from './view-all-estudiante-by-date/view-all-estudiante-by-date.component';
import { ViewAllEstudianteByCategoryComponent } from './view-all-estudiante-by-category/view-all-estudiante-by-category.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    EstudiantesUComponent, 
    CreateEstudianteComponent, 
    ViewEstudianteComponent, 
    ViewAllEstudianteComponent, 
    UpdateEstudianteComponent, 
    DeleteEstudianteComponent, 
    ViewAllEstudianteByDateComponent, 
    ViewAllEstudianteByCategoryComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EstudiantesURoutingModule
  ]
})
export class EstudiantesUModule { }
