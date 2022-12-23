import { Component, OnInit } from '@angular/core';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})

export class ExperienciaComponent implements OnInit {
  isLogged = false;
  acciontype = "";
  
  experienciaList: experiencia[] = [];
  
  experienciaIndividual: experiencia = new experiencia("","","","","","","")
  
  
  constructor(private sExperiencia:ExperienciaService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarExperiencia();

  }

  cargarExperiencia() {
    this.sExperiencia.lista().subscribe(data => {this.experienciaList = data;});
  }

  nuevoExperiencia(accion:string) {
    this.experienciaIndividual = new experiencia("","","","","","","" );    
    this.acciontype = accion;
 }
 
 editarModificarExperiencia(event:any, item:any, accion:string) {
   console.log("Event: ",event,"Item:",item);
   this.acciontype = accion;   
   this.experienciaIndividual = item;        
 }

 eliminarExperiencia(event:any, item:any, accion:string){
   console.log("Event: ",event,"Item:",item);
   this.acciontype = accion;
   this.experienciaIndividual = item;        
 }
   

}
