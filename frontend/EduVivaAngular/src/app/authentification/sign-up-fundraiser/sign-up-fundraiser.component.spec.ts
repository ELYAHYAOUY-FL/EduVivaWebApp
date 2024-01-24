import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpFundraiserComponent } from './sign-up-fundraiser.component';

describe('SignUpFundraiserComponent', () => {
  let component: SignUpFundraiserComponent;
  let fixture: ComponentFixture<SignUpFundraiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpFundraiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpFundraiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
