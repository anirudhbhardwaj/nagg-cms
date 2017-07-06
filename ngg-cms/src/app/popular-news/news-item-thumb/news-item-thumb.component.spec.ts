import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemThumbComponent } from './news-item-thumb.component';

describe('NewsItemThumbComponent', () => {
  let component: NewsItemThumbComponent;
  let fixture: ComponentFixture<NewsItemThumbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemThumbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemThumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
