import { Component, OnInit } from '@angular/core';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {
  isLogged = false;
  acciontype = "";

  educacionList: educacion[] = [];

  educacionIndividual: educacion = new educacion("","","","","","","" );
  
  constructor(private sEducacion:EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarEducacion();
  }

  cargarEducacion() {
    this.sEducacion.lista().subscribe(data => {this.educacionList = data;});
    console.log(this.educacionList);
  }
  
  nuevoEducacion(accion:string) {

    this.educacionIndividual = new educacion("","","","","","","" );
    this.acciontype = accion;
 }
 
 editarModificarEducacion(event:any, item:any, accion:string){
   console.log("Event: ",event,"Item:",item, "accion:", accion);
   this.educacionIndividual = item;        
   this.acciontype = accion;
 }

 eliminarEducacion(event:any, item:any, accion:string){
   console.log("Event: ",event,"Item:",item, "accion:", accion);
   this.educacionIndividual = item;        
   this.acciontype = accion;
 } 

}
