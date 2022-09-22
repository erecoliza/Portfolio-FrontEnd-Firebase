import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.scss']
})
export class ProyectoModalComponent implements OnInit {

  @Input() 
  miProyecto: any;  

  miPortfolio: any;
  
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.miPortfolio = data.proyectos;
      //this.miPortfolio = this.miProyecto;       
   });  
   
  }
}
