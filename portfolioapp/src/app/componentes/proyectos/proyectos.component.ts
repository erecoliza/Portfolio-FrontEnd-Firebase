import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {

  proyectosList:any;
  proyectoIndividual: any;  
  
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
       this.proyectosList = data.proyectos;       
    });
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
