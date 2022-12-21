import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {  
  isLogged = false;
   
  constructor(private router: Router, private tokenService: TokenService, private datosPorfolio:PortfolioService){}
  
  miPortfolio: any;
 
  ngOnInit(): void {

    if(this.tokenService.getToken()) {
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }

    this.datosPorfolio.obtenerDatos().subscribe(data => {
       this.miPortfolio=data;
    });

  }

   miLogout(): void {
   this.tokenService.logOut();
   window.location.reload();
  }
  
}
