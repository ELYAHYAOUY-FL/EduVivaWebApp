import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFondationsComponent } from './login-fondations.component';

describe('LoginFondationsComponent', () => {
  let component: LoginFondationsComponent;
  let fixture: ComponentFixture<LoginFondationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFondationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginFondationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
