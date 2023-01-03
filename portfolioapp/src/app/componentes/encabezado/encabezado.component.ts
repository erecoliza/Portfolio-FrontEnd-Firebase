import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { red } from 'src/app/model/red.model';
import { RedService } from 'src/app/servicios/red.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.scss'],
})
export class EncabezadoComponent implements OnInit {
  isLogged = false;  
  acciontype = "";


  redList: red[] = [];
  redIndividual = [];  

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private sRed: RedService
  ) {}

  miPortfolio: any;

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.cargarRed();
  }

  cargarRed() {
    this.sRed.lista().subscribe((data) => {
      this.redList = data;
    });
  }

  editarModificarRed(event:any, item:any, accion:string){
    console.log("Event: ",event,"Item:",item, "accion:", accion);
    this.redIndividual = item;        
    this.acciontype = accion;
  }

  miLogout(): void {
    this.tokenService.logOut();
    window.location.reload();
  }
}
