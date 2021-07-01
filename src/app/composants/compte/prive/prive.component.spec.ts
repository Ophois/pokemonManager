import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriveComponent } from './prive.component';

describe('PriveComponent', () => {
  let component: PriveComponent;
  let fixture: ComponentFixture<PriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
