import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidad-modal',
  templateUrl: './habilidad-modal.component.html',
  styleUrls: ['./habilidad-modal.component.scss']
})
export class HabilidadModalComponent implements OnInit {
  @Input() experienciaId: any;  

  miPortfolio:any;
  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe(data => {
       this.miPortfolio=data;      
       console.log("Numero de Id recibido:" + this.experienciaId);
    });
  }


 

}
