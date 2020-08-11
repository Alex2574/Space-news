import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News08Component } from './news08.component';

describe('News08Component', () => {
  let component: News08Component;
  let fixture: ComponentFixture<News08Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News08Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News08Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
