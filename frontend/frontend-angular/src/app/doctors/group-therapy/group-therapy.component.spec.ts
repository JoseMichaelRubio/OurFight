import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupTherapyComponent } from './group-therapy.component';

describe('GroupTherapyComponent', () => {
  let component: GroupTherapyComponent;
  let fixture: ComponentFixture<GroupTherapyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupTherapyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
