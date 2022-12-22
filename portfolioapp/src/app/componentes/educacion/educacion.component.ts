import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  isLogged = false;

  educacionList: educacion[] = [];
  
  educacionIndividual = [];  

  constructor(private sEducacion:EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarEducacion();
  }

  cargarEducacion() {
    this.sEducacion.lista().subscribe(data => {this.educacionList = data;});
  }
  
  nuevoEducacion() {
    this.educacionIndividual = [];    
 }
 
 editarModificarEducacion(event:any, item:any){
   console.log("Event: ",event,"Item:",item);
   this.educacionIndividual = item;        
 }

 eliminarEducacion(event:any, item:any){
   console.log("Event: ",event,"Item:",item);
   this.educacionIndividual = item;        
 }
  
  isLogin(){
    let tokenValor = localStorage.getItem('token'); 
    return tokenValor == 'eduardo123456';     
  }

}
