import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-estudiante',
  templateUrl: './view-estudiante.component.html',
  styleUrls: ['./view-estudiante.component.css']
})
export class ViewEstudianteComponent implements OnInit {
  estudianteId = 0;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.estudianteId = data.id;
    });
  }

}
