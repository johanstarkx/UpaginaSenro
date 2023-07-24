import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallessensorComponent } from './detallessensor.component';

describe('DetallessensorComponent', () => {
  let component: DetallessensorComponent;
  let fixture: ComponentFixture<DetallessensorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetallessensorComponent]
    });
    fixture = TestBed.createComponent(DetallessensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
