import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-estudiante-by-date',
  templateUrl: './view-all-estudiante-by-date.component.html',
  styleUrls: ['./view-all-estudiante-by-date.component.css']
})
export class ViewAllEstudianteByDateComponent implements OnInit {

  searchDate = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.searchDate = data.date;
    });
  }

}
