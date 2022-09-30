import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  experienciaList: any;
  experienciaIndividual: any;
  
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
       this.experienciaList = data.experiencia;
       console.log(this.experienciaList);
    });
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
