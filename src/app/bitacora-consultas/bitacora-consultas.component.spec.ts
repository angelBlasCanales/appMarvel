import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitacoraConsultasComponent } from './bitacora-consultas.component';

describe('BitacoraConsultasComponent', () => {
  let component: BitacoraConsultasComponent;
  let fixture: ComponentFixture<BitacoraConsultasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BitacoraConsultasComponent]
    });
    fixture = TestBed.createComponent(BitacoraConsultasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
