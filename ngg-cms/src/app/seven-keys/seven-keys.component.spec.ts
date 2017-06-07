import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SevenKeysComponent } from './seven-keys.component';

describe('SevenKeysComponent', () => {
  let component: SevenKeysComponent;
  let fixture: ComponentFixture<SevenKeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SevenKeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SevenKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
