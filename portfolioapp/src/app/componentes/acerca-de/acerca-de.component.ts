import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/servicios/persona.service';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import * as Notiflix from 'notiflix';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.scss']
})
export class AcercaDeComponent implements OnInit {

  persona: persona = new persona("","","","","","");

  constructor(public personaService: PersonaService){}

  ngOnInit(): void {
    Notiflix.Loading.standard("Cargando Datos..")
    this.personaService.getPersona().subscribe(data => {
      this.persona = data
      console.log("componente")
      console.log(this.persona);
    });
    console.log("componente-2")
    console.log(this.persona);
    Notiflix.Loading.remove();
  }

  isLogin() {
    let tokenValor = localStorage.getItem('token');
    return tokenValor == 'eduardo123456';
  }

}
