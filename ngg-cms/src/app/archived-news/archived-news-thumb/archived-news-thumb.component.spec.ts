import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedNewsThumbComponent } from './archived-news-thumb.component';

describe('ArchivedNewsThumbComponent', () => {
  let component: ArchivedNewsThumbComponent;
  let fixture: ComponentFixture<ArchivedNewsThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedNewsThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedNewsThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
