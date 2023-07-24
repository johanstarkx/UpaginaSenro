import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialsensorComponent } from './historialsensor.component';

describe('HistorialsensorComponent', () => {
  let component: HistorialsensorComponent;
  let fixture: ComponentFixture<HistorialsensorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorialsensorComponent]
    });
    fixture = TestBed.createComponent(HistorialsensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
