import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedNewsComponent } from './archived-news.component';

describe('ArchivedNewsComponent', () => {
  let component: ArchivedNewsComponent;
  let fixture: ComponentFixture<ArchivedNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
