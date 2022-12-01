import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de-datos-modal',
  templateUrl: './acerca-de-datos-modal.component.html',
  styleUrls: ['./acerca-de-datos-modal.component.scss']
})
export class AcercaDeDatosModalComponent implements OnInit {
  persona: persona = new persona("","","","","","");

  constructor(public personaService: PersonaService){}

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {
      this.persona = data    
    
    });
  }

}
