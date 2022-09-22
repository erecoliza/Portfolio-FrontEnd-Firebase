import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit { 

  educacionList: any;
  
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
       this.educacionList = data.educacion;
       console.log(this.educacionList);
    });
  }

  agregarEducacion(){
    console.log("llegue");
  }

  isLogin(){
    let tokenValor = localStorage.getItem('token'); 
    return tokenValor == 'eduardo123456';     
  }

}