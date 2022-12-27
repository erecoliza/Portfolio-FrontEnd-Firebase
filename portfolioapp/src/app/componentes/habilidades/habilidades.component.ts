import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss']
})
export class HabilidadesComponent implements OnInit {
  isLogged = false;
  acciontype = "";

  habilidadList: habilidad[] = [];
  
  habilidadIndividual: habilidad = new habilidad("",0,""); 
  
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
  
  nuevoHabilidad(accion:string) {
    this.habilidadIndividual = new habilidad("",0,""); 
    this.acciontype = accion;
 }
 
 editarModificarHabilidad(event:any, item:any, accion:string){
   console.log("Event: ",event,"Item:",item);
   this.acciontype = accion;
   this.habilidadIndividual = item;        
 }

 eliminarHabilidad(event:any, item:any, accion:string){
   console.log("Event: ",event,"Item:",item);
   this.acciontype = accion;
   this.habilidadIndividual = item;        
 }
    
}
