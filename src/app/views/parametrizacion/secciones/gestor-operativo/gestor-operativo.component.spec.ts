import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestorOperativoComponent } from './gestor-operativo.component';

describe('GestorOperativoComponent', () => {
  let component: GestorOperativoComponent;
  let fixture: ComponentFixture<GestorOperativoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestorOperativoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestorOperativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
