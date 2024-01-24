import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCardsComponent } from './login-cards.component';

describe('LoginCardsComponent', () => {
  let component: LoginCardsComponent;
  let fixture: ComponentFixture<LoginCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
