import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-estudiante',
  templateUrl: './delete-estudiante.component.html',
  styleUrls: ['./delete-estudiante.component.css']
})
export class DeleteEstudianteComponent implements OnInit {

  estudianteId = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=> {
      this.estudianteId = data.id;
    });
  }

}
