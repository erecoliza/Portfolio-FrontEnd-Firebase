import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-educacion-modal',
  templateUrl: './educacion-modal.component.html',  
  styleUrls: ['./educacion-modal.component.scss']
})
export class EducacionModalComponent implements OnInit {
  
  @Input() miEducacion: any; 
  
  @Input() miAccionType: any; 

  ngOnInit(): void {
   
  }

}
