import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { educacion } from 'src/app/model/educacion.model';
import { EducacionService } from 'src/app/servicios/educacion.service';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',  
  styleUrls: ['./educacion-modal.component.scss']
})
export class EducacionModalComponent implements OnInit {
  
  @Input() miEducacion: any; 
  
  @Input() miAccionType: any; 

  constructor(private sEducacion:EducacionService, private router:Router) { }

  ngOnInit(): void {
    //this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
  }

  onCreate(): void {
    const educa = new educacion(this.miEducacion.establecimiento,this.miEducacion.web,this.miEducacion.logo, 
      this.miEducacion.puesto, this.miEducacion.periodo_desde, this.miEducacion.periodo_hasta, this.miEducacion.descripcion)    
    this.sEducacion.save(this.miEducacion).subscribe(
      data => {
        alert("Educación Añadida");
        window.location.reload();        
        this.router.navigate(['/index']); 
    }, err => {
      console.log("error", err);
      alert('No se pudo Añadir Educación');
      window.location.reload();
      this.router.navigate(['/index']);        
    }
    );  
  }

  onUpdate(id?:number): void {    
    if(id!=undefined) {
    this.sEducacion.update( id, this.miEducacion).subscribe(
      date => {
        alert("Educación Actualizada");
        window.location.reload();        
        this.router.navigate(['/index']); 
      }, err => {
        alert('Error al actualizar Educacion');
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );  
    }
  }

  delete(id?:number){
    if(id!=undefined) {
      this.sEducacion.delete(id).subscribe(data => {   
        alert('Se elimino Educacion'); 
        window.location.reload();        
        this.router.navigate(['/index']);        
      }, err => {
        alert('No se pudo eliminar Educación');
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );      
    }       
  }

}
