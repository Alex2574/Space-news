import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News09Component } from './news09.component';

describe('News09Component', () => {
  let component: News09Component;
  let fixture: ComponentFixture<News09Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News09Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
