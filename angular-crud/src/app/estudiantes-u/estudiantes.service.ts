import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Estudiante } from './estudiante';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class EstudiantesService {

  //En esta parte cuando llamamos al httpcClient es en minuscula la primera letra por que es mejor supuestamente
  constructor(private httpClient: HttpClient) { }

  getAllEstudiantes(): Observable<Estudiante>{
    const estudianteUrl = 'http://localhost:3000/students';
    return this.httpClient.get<Estudiante>(estudianteUrl); //return an observable
  }

  createEstudiante(estudianteBody): Observable<Estudiante> {
    const estudianteUrl = 'http://localhost:3000/students';
    return this.httpClient.post<Estudiante>(estudianteUrl, estudianteBody); //return an observable
  }

  viewEstudiante(estudianteId): Observable<Estudiante>{
    const estudianteUrl = 'http://localhost:3000/students/'+estudianteId;
    return this.httpClient.get<Estudiante>(estudianteUrl); //return an observable
  }

  updateEstudiante(estudianteId, estudianteBody): Observable<Estudiante>{
    const estudianteUrl = 'http://localhost:3000/students/'+estudianteId;
    return this.httpClient.put<Estudiante>(estudianteUrl, estudianteBody); //return an observable
  }

  deleteEstudiante(estudianteId): Observable<Estudiante>{
    const estudianteUrl = 'http://localhost:3000/students/'+ estudianteId;
    return this.httpClient.delete<Estudiante>(estudianteUrl); //return an observable
  } 
}