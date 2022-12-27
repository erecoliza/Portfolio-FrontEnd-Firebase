import { Component, OnInit, Input  } from '@angular/core';
import { Router } from '@angular/router';
import { proyecto } from 'src/app/model/proyecto.model';
import { ProyectoService } from 'src/app/servicios/proyecto.service';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.scss']
})
export class ProyectoModalComponent implements OnInit {

  @Input() miProyecto: any;
  @Input() miAccionType: any;
  
  constructor(private sProyecto:ProyectoService, private router:Router) { }

  ngOnInit(): void {
    this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
  }

  onCreate(): void {
    const proye = new proyecto(this.miProyecto.proyecto, this.miProyecto.web, this.miProyecto.fecha, this.miProyecto.descripcion)    
    this.sProyecto.save(this.miProyecto).subscribe(
      data => {
        alert("Proyecto Añadido");
        window.location.reload();        
        this.router.navigate(['/index']); 
    }, err => {
      console.log("error", err);
      alert('No se pudo Añadir el proyecto');
      window.location.reload();
      this.router.navigate(['/index']);        
    }
    );  
  }

  onUpdate(id?:number): void {    
    if(id!=undefined) {
    this.sProyecto.update( id, this.miProyecto).subscribe(
      date => {
        alert("Proyecto Actualizado");
        window.location.reload();        
        this.router.navigate(['/index']); 
      }, err => {
        alert('Error al actualizar proyecto');
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );  
    }
  }

  delete(id?:number){
    if(id!=undefined) {
      this.sProyecto.delete(id).subscribe(data => {   
        alert('Se elimino Proyecto'); 
        window.location.reload();        
        this.router.navigate(['/index']);        
      }, err => {
        alert('No se pudo eliminar el proyecto');
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );      
    }       
  }

}