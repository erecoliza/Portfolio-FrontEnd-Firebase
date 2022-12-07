import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectosList: proyecto[] = [];
  
  proyectoIndividual = [];
  
  //constructor(private sExperiencia:HabilidadService, private tokenService: TokenService) { }
  // isLogged = false;
  
  constructor(private sProyecto:ProyectoService) { }

  ngOnInit(): void {
    this.cargarProyecto();

  }

  cargarProyecto() {
    this.sProyecto.lista().subscribe(data => {this.proyectosList = data;});
  }
  
  nuevoProyecto() {
    this.proyectoIndividual = [];    
 }
 
 editarModificarProyecto(event:any, item:any){
   console.log("Event: ",event,"Item:",item);
   this.proyectoIndividual = item;        
 }

 eliminarProyecto(event:any, item:any){
   console.log("Event: ",event,"Item:",item);
   this.proyectoIndividual = item;        
 }
  
  isLogin(){
    let tokenValor = localStorage.getItem('token'); 
    return tokenValor == 'eduardo123456';     
  }

}