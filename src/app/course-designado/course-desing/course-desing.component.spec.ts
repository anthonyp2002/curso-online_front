import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDesingComponent } from './course-desing.component';

describe('CourseDesingComponent', () => {
  let component: CourseDesingComponent;
  let fixture: ComponentFixture<CourseDesingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseDesingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CourseDesingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
