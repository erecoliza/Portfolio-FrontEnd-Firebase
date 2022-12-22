import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experiencia-modal',
  templateUrl: './experiencia-modal.component.html',
  styleUrls: ['./experiencia-modal.component.scss']
})
export class ExperienciaModalComponent implements OnInit {

  @Input() miExperiencia: any;

  ngOnInit(): void { }
  
}