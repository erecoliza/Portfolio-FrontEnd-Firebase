import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoModalComponent } from './proyecto-modal.component';

describe('ProyectoModalComponent', () => {
  let component: ProyectoModalComponent;
  let fixture: ComponentFixture<ProyectoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProyectoModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProyectoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
