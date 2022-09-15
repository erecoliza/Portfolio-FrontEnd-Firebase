import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de-modal',
  templateUrl: './acerca-de-modal.component.html',
  styleUrls: ['./acerca-de-modal.component.scss']
})
export class AcercaDeModalComponent implements OnInit {
  miPortfolio:any;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
       this.miPortfolio=data;
    });
  }

}
