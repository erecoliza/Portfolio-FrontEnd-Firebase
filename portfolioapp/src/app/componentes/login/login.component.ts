import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  tokenValor: any;

  constructor() { }

  ngOnInit(): void {
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
