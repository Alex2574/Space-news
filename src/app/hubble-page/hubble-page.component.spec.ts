import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HubblePageComponent } from './hubble-page.component';

describe('HubblePageComponent', () => {
  let component: HubblePageComponent;
  let fixture: ComponentFixture<HubblePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HubblePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HubblePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
