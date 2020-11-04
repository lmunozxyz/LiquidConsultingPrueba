import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-delete-estudiante',
  templateUrl: './delete-estudiante.component.html',
  styleUrls: ['./delete-estudiante.component.css']
})
export class DeleteEstudianteComponent implements OnInit {

  estudianteId = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private estudianteService: EstudiantesService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.estudianteId = data.id;


      this.estudianteService.deleteEstudiante(this.estudianteId).subscribe(deleteEstudiantedata => {{
        
      }})
    });
  }

}