import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraiserHomeComponent } from './fundraiser-home.component';

describe('FundraiserHomeComponent', () => {
  let component: FundraiserHomeComponent;
  let fixture: ComponentFixture<FundraiserHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundraiserHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundraiserHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
