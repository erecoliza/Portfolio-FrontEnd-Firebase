import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss']
})
export class ExperienciaComponent implements OnInit {
  experienciaList:any;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
       this.experienciaList = data.experiencia;
       console.log(this.experienciaList);
    });
  }

  agregarEmpresa(){
    console.log("llegue");
  }
  
  isLogin(){
    let tokenValor = localStorage.getItem('token'); 
    return tokenValor == 'eduardo123456';     
  }

}
