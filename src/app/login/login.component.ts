import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage!: string; 

  constructor(private router: Router) {}

  login() {
    // Aquí puedes agregar la lógica para autenticar al usuario
    // utilizando los valores de `username` y `password`
    // Por ejemplo, puedes hacer una llamada a una API para validar las credenciales
    //if (this.username === 'admin' && this.password === 'password') {
      // Si las credenciales son válidas, redirige al componente de la lista de cursos
      this.router.navigate(['/courses']);
  //  } else {
      // Si las credenciales son inválidas, muestra un mensaje de error
      this.errorMessage = 'Invalid username or password';
  //  }
   
  }

  redirectToSignup() {
    // Redireccionar a la página de registro
    this.router.navigate(['/signup']);
  }
}
