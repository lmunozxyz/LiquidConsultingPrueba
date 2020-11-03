import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-all-estudiante-by-category',
  templateUrl: './view-all-estudiante-by-category.component.html',
  styleUrls: ['./view-all-estudiante-by-category.component.css']
})
export class ViewAllEstudianteByCategoryComponent implements OnInit {
  
  searchCategory = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(data => {
      this.searchCategory = data.category;
    });
  }

}
