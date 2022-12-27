import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de-datos-modal',
  templateUrl: './acerca-de-datos-modal.component.html',
  styleUrls: ['./acerca-de-datos-modal.component.scss']
})
export class AcercaDeDatosModalComponent implements OnInit {
  persona: persona = new persona("","","","","","");

  constructor(public personaService: PersonaService, private router: Router){}

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {
      this.persona = data    
    
    });
  }

  onUpdate(id?:number): void {    
    if(id!=undefined) {
    this.personaService.update( id, this.persona).subscribe(
      data => {
        alert("Dato 'Datos Generales' Actualizado");
        window.location.reload();        
        this.router.navigate(['/index']); 
      }, err => {
        alert("Error al actualizar 'Datos Generales' ");
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );     
    }
  }

}
