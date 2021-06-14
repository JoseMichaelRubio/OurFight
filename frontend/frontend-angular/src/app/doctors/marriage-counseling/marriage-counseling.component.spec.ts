import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarriageCounselingComponent } from './marriage-counseling.component';

describe('MarriageCounselingComponent', () => {
  let component: MarriageCounselingComponent;
  let fixture: ComponentFixture<MarriageCounselingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarriageCounselingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarriageCounselingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
