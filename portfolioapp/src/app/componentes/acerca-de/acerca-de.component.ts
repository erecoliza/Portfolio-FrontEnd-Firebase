import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  persona: persona = new persona("","","","","","");

  constructor(public personaService: PersonaService){}

  ngOnInit(): void {

    this.personaService.getPersona().subscribe(data => {
      this.persona = data
      console.log("componente")
      console.log(this.persona);
    });
    console.log("componente-2")
    console.log(this.persona);
  }

  isLogin() {
    let tokenValor = localStorage.getItem('token');
    return tokenValor == 'eduardo123456';
  }

}
