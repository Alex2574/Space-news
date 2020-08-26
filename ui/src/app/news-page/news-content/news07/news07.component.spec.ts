import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News07Component } from './news07.component';

describe('News07Component', () => {
  let component: News07Component;
  let fixture: ComponentFixture<News07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
