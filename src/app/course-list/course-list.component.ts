import { Component, OnInit } from '@angular/core';
import { CourseService } from '../Services/Course/course.service';
import { Course } from '../Models/Course/course';
import { UserService } from '../Services/User/user.service';
import { User } from '../Models/User/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Inscripciones } from '../Models/Inscripciones/inscripciones';



@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit{

  courses:Course[];
  user:User[];
  ins:Inscripciones = new Inscripciones();
  usuario:User=new User();


  constructor(private route: ActivatedRoute,private router: Router,private courseServices:CourseService,private userService:UserService){}
  ngOnInit(): void {
    this.listCourse();
    const userString = this.route.snapshot.queryParams['user'];
    this.usuario = JSON.parse(userString);
    console.log("El suarui",this.usuario);
  }

  private listCourse(){
    this.courseServices.listCource().subscribe(dato=>{
      this.courses =dato;
    });  }

  registerForCourse(course: Course): void {
    console.log(course.id)
    console.log(this.usuario.id)
    
    this.saveIncription(this.usuario.id,course.id,this.ins);

  }

  saveIncription(idUser:number,idCourse:number,ins:Inscripciones){
    this.courseServices.registerIns(idUser,idCourse,ins).subscribe({
      next:dato=>{
        console.log(dato);
      },
      error: err => console.log(err)
    })
  }
  
  getCourseUsers(course: Course){

  }

  listCursosTomados(){
    console.log("Apretado")
    this.router.navigate(['/cursos'],{ queryParams: { user: JSON.stringify(this.usuario) } });
  }
}
