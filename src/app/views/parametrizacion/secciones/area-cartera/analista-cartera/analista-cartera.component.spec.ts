import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalistaCarteraComponent } from './analista-cartera.component';

describe('AnalistaCarteraComponent', () => {
  let component: AnalistaCarteraComponent;
  let fixture: ComponentFixture<AnalistaCarteraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalistaCarteraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalistaCarteraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
