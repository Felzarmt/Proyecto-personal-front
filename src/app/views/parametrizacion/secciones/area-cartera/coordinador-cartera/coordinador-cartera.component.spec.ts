import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinadorCarteraComponent } from './coordinador-cartera.component';

describe('CoordinadorCarteraComponent', () => {
  let component: CoordinadorCarteraComponent;
  let fixture: ComponentFixture<CoordinadorCarteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoordinadorCarteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinadorCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
