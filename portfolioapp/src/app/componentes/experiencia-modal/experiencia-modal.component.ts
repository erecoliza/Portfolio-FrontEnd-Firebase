import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { experiencia } from 'src/app/model/experiencia.model';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.scss']
})
export class ExperienciaModalComponent implements OnInit {

  @Input() miExperiencia: any;
  @Input() miAccionType: any; 

  constructor(private sExperiencia:ExperienciaService,private router:Router) { }

  ngOnInit(): void { }

  onCreate(): void {
    const expe = new experiencia(this.miExperiencia.empresa, this.miExperiencia.web,
       this.miExperiencia.logo, this.miExperiencia.puesto, this.miExperiencia.periodo_desde, this.miExperiencia.periodo_hasta, this.miExperiencia.descripcion)    
    this.sExperiencia.save(this.miExperiencia).subscribe(
      data => {
        alert("Experiencia Añadida");
        window.location.reload();        
        this.router.navigate(['/index']); 
    }, err => {
      console.log("error", err);
      alert('No se pudo Añadir Experiencia');
      window.location.reload();
      this.router.navigate(['/index']);        
    }
    );  
  }

  onUpdate(id?:number): void {    
    if(id!=undefined) {
    this.sExperiencia.update( id, this.miExperiencia).subscribe(
      date => {
        alert("Experiencia Actualizada");
        window.location.reload();        
        this.router.navigate(['/index']); 
      }, err => {
        alert('Error al actualizar Experiencia');
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );  
    }
  }

  delete(id?:number){
    if(id!=undefined) {
      this.sExperiencia.delete(id).subscribe(data => {   
        alert('Se elimino Experiencia'); 
        window.location.reload();        
        this.router.navigate(['/index']);        
      }, err => {
        alert('No se pudo eliminar Experiencia');
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );      
    }       
  }
  
}