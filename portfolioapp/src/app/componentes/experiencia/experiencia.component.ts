import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: experiencia[] = [];
  
  experienciaIndividual = [];
  
  //constructor(private sExperiencia:ExperienciaService, private tokenService: TokenService) { }
  // isLogged = false;

  constructor(private sExperiencia:ExperienciaService) { }

  ngOnInit(): void {
    this.cargarExperiencia();

  }

  cargarExperiencia() {
    this.sExperiencia.lista().subscribe(data => {this.experienciaList = data;});
  }
  nuevoExperiencia() {
    this.experienciaIndividual = [];    
 }
 
 editarModificarExperiencia(event:any, item:any){
   console.log("Event: ",event,"Item:",item);
   this.experienciaIndividual = item;        
 }

 eliminarExperiencia(event:any, item:any){
   console.log("Event: ",event,"Item:",item);
   this.experienciaIndividual = item;        
 }
  
  isLogin(){
    let tokenValor = localStorage.getItem('token'); 
    return tokenValor == 'eduardo123456';     
  }

}
