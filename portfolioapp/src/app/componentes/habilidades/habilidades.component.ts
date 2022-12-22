import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { habilidad } from 'src/app/model/Habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  isLogged = false;

  habilidadList: habilidad[] = [];
  
  habilidadIndividual = [];
  
  constructor(private sHabilidad:HabilidadService, private tokenService: TokenService ) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

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
