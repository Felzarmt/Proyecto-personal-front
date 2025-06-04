import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiderMicrofinanzasComponent } from './lider-microfinanzas.component';

describe('LiderMicrofinanzasComponent', () => {
  let component: LiderMicrofinanzasComponent;
  let fixture: ComponentFixture<LiderMicrofinanzasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiderMicrofinanzasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiderMicrofinanzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
