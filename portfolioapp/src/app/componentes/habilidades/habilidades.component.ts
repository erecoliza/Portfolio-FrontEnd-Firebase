import { Component, OnInit } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
})
export class HabilidadesComponent implements OnInit {
  habilidadList: any;
  habilidadIndividual: any;

  constructor(private datosPorfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos().subscribe((data) => {
      this.habilidadList = data.habilidades;
      console.log(this.habilidadList);
    });
  }

  nuevoHabilidad() {
    this.habilidadIndividual = [];
  }

  editarModificarHabilidad(event: any, item: any) {
    console.log('Event: ', event, 'Item:', item);
    this.habilidadIndividual = item;
  }

  eliminarHabilidad(event: any, item: any) {
    console.log('Event: ', event, 'Item:', item);
    this.habilidadIndividual = item;
  }

  isLogin() {
    let tokenValor = localStorage.getItem('token');
    return tokenValor == 'eduardo123456';
  }
}
