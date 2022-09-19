import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HabilidadModalComponent } from './habilidad-modal.component';

describe('HabilidadModalComponent', () => {
  let component: HabilidadModalComponent;
  let fixture: ComponentFixture<HabilidadModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HabilidadModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HabilidadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
