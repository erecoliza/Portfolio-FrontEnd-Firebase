import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de-modal',
  templateUrl: './acerca-de-modal.component.html',
  styleUrls: ['./acerca-de-modal.component.scss']
})
export class AcercaDeModalComponent implements OnInit {

  persona: persona = new persona("","","","","","");

  constructor(public personaService: PersonaService, private router:Router){}
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }

  onUpdate(id?:number): void {    
    if(id!=undefined) {
    this.personaService.update( id, this.persona).subscribe(
      data => {
        alert("Dato 'Acerca de' Actualizado");
        window.location.reload();        
        this.router.navigate(['/index']); 
      }, err => {
        alert("Error al actualizar 'Acerca de' ");
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );     
    }
  }
}
