import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-proyecto-modal',
  templateUrl: './proyecto-modal.component.html',
  styleUrls: ['./proyecto-modal.component.scss']
})
export class ProyectoModalComponent implements OnInit {

  @Input()
  miProyecto: any;

  ngOnInit(): void {

  }

}