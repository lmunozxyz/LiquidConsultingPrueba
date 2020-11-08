import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstudiantesService } from '../estudiantes.service';
import { Estudiante } from '../estudiante';

@Component({
  selector: 'app-update-estudiante',
  templateUrl: './update-estudiante.component.html',
  styleUrls: ['./update-estudiante.component.css']
})
export class UpdateEstudianteComponent implements OnInit {

  estudianteId = 0;

  estudianteDetalle: Estudiante;
  constructor(
    private activatedRoute: ActivatedRoute,
    private estudianteService: EstudiantesService
      ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.estudianteId = data.id;

      this.estudianteService.viewEstudiante(this.estudianteId).subscribe(estudianteData =>{
        this.estudianteDetalle = estudianteData; // obtiene los datos del estudiante
        
        console.log(this.estudianteDetalle);
        
      });

    });
  }

  updateEstudiante(form){

    console.log(form);

    const updateEstudiante = {
      id: form.value.id,
      name: form.value.name,
      lastname: form.value.lastname,
      birthdate: form.value.birthdate,
      gender: form.value.gender,
      university: form.value.university,

  };

    this.estudianteService.updateEstudiante(this.estudianteId, updateEstudiante).subscribe(data => {
      console.log(data);
    });

  }

}