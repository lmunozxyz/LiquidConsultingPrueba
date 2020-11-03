import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'ß
})
export class EstudiantesUService {

  //En esta parte cuando llamamos al httpcClient es en minuscula la primera letra por que es mejor supuestamente
  constructor(private httpClient: HttpClient) { }

  createEstudiante(estudianteBody){
    const estudianteUrl = 'http://localhost:3000/EstudiantesU';
    return this.httpClient.post(estudianteUrl, estudianteBody); //return an observable
  }

  viewEstudiante(estudianteId){
    const estudianteUrl = 'http://localhost:3000/EstudiantesU/'+estudianteId;
    return this.httpClient.get(estudianteUrl); //return an observable
  }

  updateEstudiante(estudianteId, estudianteBody){
    const estudianteUrl = 'http://localhost:3000/EstudiantesU/'+estudianteId;
    return this.httpClient.put(estudianteUrl, estudianteBody); //return an observable
  }

  deleteEstudiante(estudianteId){
    const estudianteUrl = 'http://localhost:3000/EstudiantesU/'+estudianteId;
    return this.httpClient.delete(estudianteUrl); //return an observable
  }

  searchCategoryEstudiante(categoryId){
    const estudianteUrl = 'http://localhost:3000/EstudiantesU/category='+categoryId;
    return this.httpClient.get(estudianteUrl); //return an observable
  }

  searchDateEstudiante(dateParam){
    const estudianteUrl = 'http://localhost:3000/EstudiantesU/date='+dateParam;
    return this.httpClient.get(estudianteUrl); //return an observable
  }
  
}
