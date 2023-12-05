import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Models/User/user';
import { Observable } from 'rxjs';
import { Course } from 'src/app/Models/Course/course';
import { Inscripciones } from 'src/app/Models/Inscripciones/inscripciones';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8001/api/user/save";
  private UrlIns =  "http://localhost:8001/api/user/inscripciones";
  private UrlCurs = "http://localhost:8001/api/user/getCursos";
  private UrlCurso = "http://localhost:8001/api/user/getCurso";


  constructor(private httpClient : HttpClient) { }

  registerUser(user:User):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,user);
  }

  registerIns(idUser:number,idCource:number):Observable<Object>{
    return this.httpClient.post(`${this.UrlIns}/${idUser}/`,idCource);
  }

  listCursos(idUser:number):Observable<Inscripciones[]>{
    return this.httpClient.get<Inscripciones[]>(`${this.UrlCurs}/${idUser}`)
  }

  listCurso(idCurso:number):Observable<Course[]>{
    return this.httpClient.get<Course[]>(`${this.UrlCurso}/${idCurso}`)
  }
}
