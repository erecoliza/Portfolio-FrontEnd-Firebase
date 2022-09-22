import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {  
  tokenValor:any;
  miPortfolio:any;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
       this.miPortfolio=data;
    });
  }
 
  miLogout() {
    localStorage.removeItem('token');    
  }

  isLogin(){
    let tokenValor = localStorage.getItem('token'); 
    return tokenValor == 'eduardo123456';     
  }


}
