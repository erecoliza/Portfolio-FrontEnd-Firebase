import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  tokenValor: any;
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.form= this.formBuilder.group({
      password:['',[Validators.required,Validators.minLength(6)]],
      email:['',[Validators.required,Validators.email]],
    })
  }

  ngOnInit(): void {}

  get Password() {    
    return this.form.get('password');
  }

  get Mail() {
    return this.form.get('email');
  }

  public onLogin(event: Event) {
    // Detenemos la propagacion o ejecucion del comportamiento submint en el formulario
    event.preventDefault();
    if (this.form.valid){
      // alert("todo salio bien");  
      localStorage.setItem('token','eduardo123456');     
      console.log("token",this.tokenValor )    
    }else{
      alert("Email o Password erroneas");  
      this.form.markAllAsTouched();
    }
  }  

  public miLogout() {
    localStorage.removeItem('token');    
  }

  public isLogin(){
    this.tokenValor = localStorage.getItem('token'); 
    return this.tokenValor == 'eduardo123456';     

  }

}
