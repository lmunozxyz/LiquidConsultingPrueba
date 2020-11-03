import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-estudiante',
  templateUrl: './update-estudiante.component.html',
  styleUrls: ['./update-estudiante.component.css']
})
export class UpdateEstudianteComponent implements OnInit {

  estudianteId = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.estudianteId = data.id;
    });
  }

}
