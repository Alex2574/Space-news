import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News10Component } from './news10.component';

describe('News10Component', () => {
  let component: News10Component;
  let fixture: ComponentFixture<News10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
