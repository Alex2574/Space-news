import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { News06Component } from './news06.component';

describe('News06Component', () => {
  let component: News06Component;
  let fixture: ComponentFixture<News06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ News06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(News06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
