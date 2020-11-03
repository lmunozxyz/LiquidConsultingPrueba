import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaCarrerasComponent } from './lista-carreras/lista-carreras.component';



@NgModule({
  declarations: [ListaCarrerasComponent],
  imports: [
    CommonModule
  ],
  exports: [ListaCarrerasComponent]
})
export class CarrerasModule { }
