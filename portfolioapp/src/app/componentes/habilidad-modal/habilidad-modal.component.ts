import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-habilidad-modal',
  templateUrl: './habilidad-modal.component.html',
  styleUrls: ['./habilidad-modal.component.scss']
})
export class HabilidadModalComponent implements OnInit {
  @Input() miHabilidad: any;  
  @Input() miAccionType: any;

  ngOnInit(): void {  }

}
