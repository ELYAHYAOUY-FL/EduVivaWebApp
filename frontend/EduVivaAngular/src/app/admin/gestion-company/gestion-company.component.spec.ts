import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCompanyComponent } from './gestion-company.component';

describe('GestionCompanyComponent', () => {
  let component: GestionCompanyComponent;
  let fixture: ComponentFixture<GestionCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
