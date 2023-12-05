import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/User/user';
import { UserService } from '../Services/User/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  user:User = new User();
  usuario:any;
  public idUser: number;


  constructor(private router: Router,private userService:UserService) {}

  ngOnInit(): void {

  }

  signup(): void {
    this.saveUser();
    console.log("Usuario",this.user);
  }

  saveUser(){
    this.userService.registerUser(this.user).subscribe({
      next:dato=>{
      console.log("Mis datos",dato);
      this.usuario= dato; 
      this.idUser = this.usuario.id;
      this.user.id=this.idUser;
      this.router.navigate(['/courses'],{ queryParams: { user: JSON.stringify(this.user) } });
    },
    error: err => console.log(err)
  });
  }

  redirectToLogin(): void {
    // Redirige al componente de inicio de sesión
    this.router.navigate(['/login']);
  }
}
