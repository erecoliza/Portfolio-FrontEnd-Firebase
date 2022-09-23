import { Component, OnInit, Input } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',  
  styleUrls: ['./educacion-modal.component.scss']
})
export class EducacionModalComponent implements OnInit {

  @Input() miEducacion: any; 

  ngOnInit(): void {
   
  }

}
