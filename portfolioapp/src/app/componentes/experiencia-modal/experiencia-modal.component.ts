import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.scss']
})
export class ExperienciaModalComponent implements OnInit {

  @Input() miExperiencia: any;  

  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void { }
  
}