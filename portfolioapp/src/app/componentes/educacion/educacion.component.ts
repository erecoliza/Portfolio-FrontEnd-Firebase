import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit { 

  educacionList: any;

  educacionIndividual:any;
  
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
       this.educacionList = data.educacion;
       console.log(this.educacionList);
    });
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