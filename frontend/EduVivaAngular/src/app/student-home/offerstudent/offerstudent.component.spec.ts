import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferstudentComponent } from './offerstudent.component';

describe('OfferstudentComponent', () => {
  let component: OfferstudentComponent;
  let fixture: ComponentFixture<OfferstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferstudentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfferstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
