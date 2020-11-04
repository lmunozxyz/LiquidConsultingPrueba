import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../estudiantes.service';

@Component({
  selector: 'app-create-estudiante',
  templateUrl: './create-estudiante.component.html',
  styleUrls: ['./create-estudiante.component.css']
})
export class CreateEstudianteComponent implements OnInit {

 constructor(private estudianteService: EstudiantesService) { }
  
  ngOnInit(): void {
  }

  addNewEstudiante(form){
    console.log(form.value);

    let newEstudiante = {
//      estudianteId: form.value.product_category,
        name: form.value.estudiante_name,
        lastname: form.value.estudiante_lastname,
        birthdate: form.value.estudiante_birthdate,
        gender: form.value.estudiante_gender,
        university: form.value.estudiante_university,
    };

    console.log(newEstudiante);

    this.estudianteService.createEstudiante(newEstudiante).subscribe(data => {
      console.log(data);
    });

  }
}
