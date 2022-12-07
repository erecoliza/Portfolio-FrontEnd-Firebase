import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { habilidad } from 'src/app/model/Habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  habilidadList: habilidad[] = [];
  
  habilidadIndividual = [];
  
  //constructor(private sExperiencia:HabilidadService, private tokenService: TokenService) { }
  // isLogged = false;

  constructor(private sHabilidad:HabilidadService) { }

  ngOnInit(): void {
    this.cargarHabilidad();

  }

  cargarHabilidad() {
    this.sHabilidad.lista().subscribe(data => {this.habilidadList = data;});
  }
  
  nuevoHabilidad() {
    this.habilidadIndividual = [];    
 }
 
 editarModificarHabilidad(event:any, item:any){
   console.log("Event: ",event,"Item:",item);
   this.habilidadIndividual = item;        
 }

 eliminarHabilidad(event:any, item:any){
   console.log("Event: ",event,"Item:",item);
   this.habilidadIndividual = item;        
 }
  
  isLogin(){
    let tokenValor = localStorage.getItem('token'); 
    return tokenValor == 'eduardo123456';     
  }

}
