import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercaDeModalComponent } from './acerca-de-modal.component';

describe('AcercaDeModalComponent', () => {
  let component: AcercaDeModalComponent;
  let fixture: ComponentFixture<AcercaDeModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcercaDeModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcercaDeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
