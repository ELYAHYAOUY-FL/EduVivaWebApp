import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingUpStudentsComponent } from './sing-up-students.component';

describe('SingUpStudentsComponent', () => {
  let component: SingUpStudentsComponent;
  let fixture: ComponentFixture<SingUpStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingUpStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingUpStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
