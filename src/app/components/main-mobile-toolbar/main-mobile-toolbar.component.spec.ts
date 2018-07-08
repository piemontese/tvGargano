import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMobileToolbarComponent } from './main-mobile-toolbar.component';

describe('MainMobileToolbarComponent', () => {
  let component: MainMobileToolbarComponent;
  let fixture: ComponentFixture<MainMobileToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMobileToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMobileToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
