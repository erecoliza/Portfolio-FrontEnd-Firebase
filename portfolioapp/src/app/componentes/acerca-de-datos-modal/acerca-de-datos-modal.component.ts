import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-datos-modal',
  templateUrl: './acerca-de-datos-modal.component.html',
  styleUrls: ['./acerca-de-datos-modal.component.scss']
})
export class AcercaDeDatosModalComponent implements OnInit {

  miPortfolio: any;
  
  constructor(private datosPorfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data;
    });
  }

}
