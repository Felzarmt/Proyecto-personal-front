import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorCreditoComponent } from './coordinador-credito.component';

describe('CoordinadorCreditoComponent', () => {
  let component: CoordinadorCreditoComponent;
  let fixture: ComponentFixture<CoordinadorCreditoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinadorCreditoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinadorCreditoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
