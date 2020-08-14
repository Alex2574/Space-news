import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News04Component } from './news04.component';

describe('News04Component', () => {
  let component: News04Component;
  let fixture: ComponentFixture<News04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
