import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News03Component } from './news03.component';

describe('News03Component', () => {
  let component: News03Component;
  let fixture: ComponentFixture<News03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
