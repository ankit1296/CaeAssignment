import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeFlightDetailComponent } from './see-flight-detail.component';

describe('SeeFlightDetailComponent', () => {
  let component: SeeFlightDetailComponent;
  let fixture: ComponentFixture<SeeFlightDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeFlightDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeFlightDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
