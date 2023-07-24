import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listasensores2Component } from './listasensores2.component';

describe('Listasensores2Component', () => {
  let component: Listasensores2Component;
  let fixture: ComponentFixture<Listasensores2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Listasensores2Component]
    });
    fixture = TestBed.createComponent(Listasensores2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
