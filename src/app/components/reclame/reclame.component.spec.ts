import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclameComponent } from './reclame.component';

describe('ReclameComponent', () => {
  let component: ReclameComponent;
  let fixture: ComponentFixture<ReclameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReclameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReclameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
