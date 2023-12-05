import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Models/Course/course';
import { Inscripciones } from 'src/app/Models/Inscripciones/inscripciones';
import { User } from 'src/app/Models/User/user';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private baseUrl = "http://localhost:8002/api/cource/allList";
  private UrlIns =  "http://localhost:8001/api/user/inscripciones";

  constructor(private httpClient : HttpClient) { }

  listCource():Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.baseUrl}`)
  }

  registerIns(idUser:number,idCource:number,ins:Inscripciones):Observable<Object>{
    return this.httpClient.post(`${this.UrlIns}/${idUser}/${idCource}`,ins);
  }

}
