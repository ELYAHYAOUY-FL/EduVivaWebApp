import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersGerstionComponent } from './offers-gerstion.component';

describe('OffersGerstionComponent', () => {
  let component: OffersGerstionComponent;
  let fixture: ComponentFixture<OffersGerstionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersGerstionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffersGerstionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
