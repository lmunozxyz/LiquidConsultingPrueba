import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';



@NgModule({
  declarations: [ListaEstudiantesComponent],
  imports: [
    CommonModule
  ],
  exports:[ListaEstudiantesComponent]
})
export class EstudiantesModule { }
