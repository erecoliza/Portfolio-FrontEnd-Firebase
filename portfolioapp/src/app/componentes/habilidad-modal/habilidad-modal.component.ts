import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidad-modal',
  templateUrl: './habilidad-modal.component.html',
  styleUrls: ['./habilidad-modal.component.scss']
})
export class HabilidadModalComponent implements OnInit {
  @Input() miHabilidad: any;  

  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {  }

}
