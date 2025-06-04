import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorComercialComponent } from './director-comercial.component';

describe('DirectorComercialComponent', () => {
  let component: DirectorComercialComponent;
  let fixture: ComponentFixture<DirectorComercialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorComercialComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorComercialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
