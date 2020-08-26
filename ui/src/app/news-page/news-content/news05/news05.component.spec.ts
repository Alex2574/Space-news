import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News05Component } from './news05.component';

describe('News05Component', () => {
  let component: News05Component;
  let fixture: ComponentFixture<News05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
