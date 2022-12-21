import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { TokenService } from 'src/app/servicios/token.service';
import { AuthService } from 'src/app/servicios/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  isLogged = false;
  isLogginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsg!: string;

  tokenValor: any;
  form!: FormGroup;

  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogin(): void {    
    this.loginUsuario = new LoginUsuario(this.nombreUsuario,this.password); 
      this.authService.login(this.loginUsuario).subscribe(data => {
        this.isLogged= true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.nombreUsuario);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
        window.location.reload();   
           
      }, err => {
        this.isLogged= false;
        this.isLogginFail = true;
        this.errMsg = err.error.mensaje;
        console.log(this.errMsg);
      });     
  }
 
  /*
  public onLogin(event: Event) {
    // Detenemos la propagacion o ejecucion del comportamiento submint en el formulario
    event.preventDefault();
    if (this.form.valid) {
      // alert("todo salio bien");  
      localStorage.setItem('token', 'eduardo123456');
      console.log("token", this.tokenValor)
    } else {
      Swal.fire(
        'Error!',
        'Email o Password erroneas!',
        'error'
      );
      this.form.markAllAsTouched();
    }
  }
  */

  public miLogout() {
    localStorage.removeItem('token');
  }

  
}
