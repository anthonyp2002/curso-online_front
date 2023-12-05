import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/Models/Course/course';
import { Inscripciones } from 'src/app/Models/Inscripciones/inscripciones';
import { User } from 'src/app/Models/User/user';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-course-desing',
  templateUrl: './course-desing.component.html',
  styleUrls: ['./course-desing.component.css']
})
export class CourseDesingComponent implements OnInit {

  usuario:User=new User();
  courses:Course[];

  a:number ;
  cursos:Array<Course>;
  cur:Array<Course>;
  idCoursed: number[] = [];
  cursed:any[]=[];
  inscripciones:any;
  public idCourse: number;

  constructor(private route: ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    const userString = this.route.snapshot.queryParams['user'];
    this.usuario = JSON.parse(userString);
    console.log("El suarui",this.usuario);
    this.listCourse(this.usuario.id);
  }

  private listCourse(idUser:number){
    this.userService.listCursos(idUser).subscribe(dato=>{
      this.inscripciones =dato;
      for (let i = 0; i < this.inscripciones.length; i++) {
        this.cur = this.inscripciones[i].courseid;
        console.log("Curso",this.cur);
        this.a= this.inscripciones[i].courseid;;
        this.registerForCourse(this.a);
      }
    });  
  }

  registerForCourse(coursedId: number) {
    this.userService.listCurso(coursedId).subscribe(dato=>
      {
        console.log(dato)
        this.courses=dato;
        this.cursed.push(this.courses)

      });
  }



}
