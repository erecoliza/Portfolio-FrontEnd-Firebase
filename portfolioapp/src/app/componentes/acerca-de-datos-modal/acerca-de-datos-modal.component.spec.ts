import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeDatosModalComponent } from './acerca-de-datos-modal.component';

describe('AcercaDeDatosModalComponent', () => {
  let component: AcercaDeDatosModalComponent;
  let fixture: ComponentFixture<AcercaDeDatosModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeDatosModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeDatosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
