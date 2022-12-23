import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  isLogged = false;
  acciontype = "";

  proyectosList: proyecto[] = [];
  
  proyectoIndividual: proyecto = new proyecto("","","",""); 
    
  constructor(private sProyecto:ProyectoService, private tokenService: TokenService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.cargarProyecto();
        
  }

  cargarProyecto() {
    this.sProyecto.lista().subscribe(data => {this.proyectosList = data;});
  }
  
  nuevoProyecto(accion:string) {
    this.acciontype = accion;
    this.proyectoIndividual = new proyecto("","","",""); 
 }
 
 editarModificarProyecto(event:any, item:any, accion:string) {
   console.log("Event: ",event,"Item:",item);
   this.acciontype = accion;
   this.proyectoIndividual = item;        
 }

 eliminarProyecto(event:any, item:any, accion:string) {
   console.log("Event: ",event,"Item:",item);
   this.acciontype = accion;
   this.proyectoIndividual = item;         
 }
  
}