import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../estudiante';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-view-all-estudiante',
  templateUrl: './view-all-estudiante.component.html',
  styleUrls: ['./view-all-estudiante.component.css']
})
export class ViewAllEstudianteComponent implements OnInit {

  estudianteLista: Estudiante;
  constructor(private estudiantesService: EstudiantesService) { }

  ngOnInit(): void {
    this.estudiantesService.getAllEstudiantes().subscribe(data=> {
      this.estudianteLista = data;
    })
  }

}
