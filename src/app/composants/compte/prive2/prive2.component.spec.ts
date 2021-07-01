import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prive2Component } from './prive2.component';

describe('Prive2Component', () => {
  let component: Prive2Component;
  let fixture: ComponentFixture<Prive2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prive2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Prive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
