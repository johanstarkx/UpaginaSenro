import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarTarjetaComponent } from './modal-editar-tarjeta.component';

describe('ModalEditarTarjetaComponent', () => {
  let component: ModalEditarTarjetaComponent;
  let fixture: ComponentFixture<ModalEditarTarjetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEditarTarjetaComponent]
    });
    fixture = TestBed.createComponent(ModalEditarTarjetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
