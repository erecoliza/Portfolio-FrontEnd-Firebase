import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { habilidad } from 'src/app/model/habilidad.model';
import { HabilidadService } from 'src/app/servicios/habilidad.service';

@Component({
  selector: 'app-habilidad-modal',
  templateUrl: './habilidad-modal.component.html',
  styleUrls: ['./habilidad-modal.component.scss']
})
export class HabilidadModalComponent implements OnInit {
  @Input() miHabilidad: any;  
  @Input() miAccionType: any;

  constructor(private sHabilidad: HabilidadService, private router:Router) { }

  ngOnInit(): void {  }

  onCreate(): void {
    const habi = new habilidad(this.miHabilidad.habilidad, this.miHabilidad.porcentaje, this.miHabilidad.color);    
    this.sHabilidad.save(this.miHabilidad).subscribe(
      data => {
        alert("Habilidad Añadida");
        window.location.reload();        
        this.router.navigate(['/index']); 
    }, err => {
      console.log("error", err);
      alert('No se pudo Añadir la Habilidad');
      window.location.reload();
      this.router.navigate(['/index']);        
    }
    );  
  }

  onUpdate(id?:number): void {    
    if(id!=undefined) {
    this.sHabilidad.update( id, this.miHabilidad).subscribe(
      date => {
        alert("Habilidad Actualizada");
        window.location.reload();        
        this.router.navigate(['/index']); 
      }, err => {
        alert('Error al actualizar Habilidad');
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );  
    }
  }

  delete(id?:number){
    if(id!=undefined) {
      this.sHabilidad.delete(id).subscribe(data => {   
        alert('Se elimino Habilidad'); 
        window.location.reload();        
        this.router.navigate(['/index']);        
      }, err => {
        alert('No se pudo eliminar la Habilidad');
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );      
    }       
  }
}
