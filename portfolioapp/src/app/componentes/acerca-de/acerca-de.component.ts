import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {
  isLogged = false;

  persona: persona = new persona("","","","","","");

  constructor(public personaService: PersonaService, private tokenService: TokenService){}

  ngOnInit(): void {

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.personaService.getPersona().subscribe(data => {
      this.persona = data      
    });     
  }

  
}
