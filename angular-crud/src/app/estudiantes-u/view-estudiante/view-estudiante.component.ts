import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../estudiantes.service';
import { ActivatedRoute } from '@angular/router';
import { Estudiante } from '../estudiante';

@Component({
  selector: 'app-view-estudiante',
  templateUrl: './view-estudiante.component.html',
  styleUrls: ['./view-estudiante.component.css']
})
export class ViewEstudianteComponent implements OnInit {

  estudianteId = 0;
  name = "";
  estudianteDetalle: Estudiante;
  constructor(
    private activatedRoute: ActivatedRoute,
    private estudiantesService: EstudiantesService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(data => {
      this.estudianteId = data.id;

    })
    this.estudiantesService.viewEstudiante(this.estudianteId).subscribe(estudianteData => {
      this.estudianteDetalle = estudianteData;

    });  
  }

}
