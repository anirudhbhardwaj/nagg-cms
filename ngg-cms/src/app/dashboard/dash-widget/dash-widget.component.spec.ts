import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashWidgetComponent } from './dash-widget.component';

describe('DashWidgetComponent', () => {
  let component: DashWidgetComponent;
  let fixture: ComponentFixture<DashWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
