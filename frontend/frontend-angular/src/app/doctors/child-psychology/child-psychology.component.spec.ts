import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildPsychologyComponent } from './child-psychology.component';

describe('ChildPsychologyComponent', () => {
  let component: ChildPsychologyComponent;
  let fixture: ComponentFixture<ChildPsychologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildPsychologyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildPsychologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
