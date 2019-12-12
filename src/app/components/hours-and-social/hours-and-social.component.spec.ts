import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoursAndSocialComponent } from './hours-and-social.component';

describe('HoursAndSocialComponent', () => {
  let component: HoursAndSocialComponent;
  let fixture: ComponentFixture<HoursAndSocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoursAndSocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoursAndSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
