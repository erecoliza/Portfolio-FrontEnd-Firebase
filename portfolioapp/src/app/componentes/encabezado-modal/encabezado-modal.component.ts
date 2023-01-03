import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RedService } from 'src/app/servicios/red.service';

@Component({
  selector: 'app-encabezado-modal',
  templateUrl: './encabezado-modal.component.html',  
  styleUrls: ['./encabezado-modal.component.scss']
})
export class EncabezadoModalComponent implements OnInit {
  
  @Input() miRed: any; 
  
  @Input() miAccionType: any; 

  constructor(private sRedes:RedService, private router:Router) { }

  ngOnInit(): void {
    //this.router.routeReuseStrategy.shouldReuseRoute = () => { return false; };
  }

  onUpdate(id?:number): void {    
    if(id!=undefined) {
    this.sRedes.update( id, this.miRed).subscribe(
      data => {
        alert("Red Social Actualizada");
        window.location.reload();        
        this.router.navigate(['/index']); 
      }, err => {
        alert('Error al actualizar Red Social');
        window.location.reload();
        this.router.navigate(['/index']);        
      }
      );  
    }
  }
  
}
