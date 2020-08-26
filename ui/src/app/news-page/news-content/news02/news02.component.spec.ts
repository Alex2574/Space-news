import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News02Component } from './news02.component';

describe('News02Component', () => {
  let component: News02Component;
  let fixture: ComponentFixture<News02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
