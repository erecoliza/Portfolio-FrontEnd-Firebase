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

  public onEnviar($event: any) {
    localStorage.setItem('token','eduardo123456');     
    console.log("token",this.tokenValor )
  }

  public miLogin() {
    localStorage.setItem('token','eduardo123456'); 
    
    console.log("token",this.tokenValor )
  }
  public miLogout() {
    localStorage.removeItem('token');    
  }

  public isLogin(){
    this.tokenValor = localStorage.getItem('token'); 
    return this.tokenValor == 'eduardo123456';     

  }

}
