import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-zona',
  standalone: true,
  imports: [ReactiveFormsModule,NgxMaskDirective],
  templateUrl: './zona.component.html',
  styleUrl: './zona.component.scss'
})
export class GerenteZonaComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      zon_bonif: [''],
      zon_mcart: [''],
      zon_mcart_tot: [''],
      zon_capt: [''],
      zon_aport: [''],
      zon_roda: [''],
      zon_exced: [''],
    });
  }
  validarPorcentaje(campo: string): void {
    const valor = this.form.get(campo)?.value;
  
    if (valor > 100) {
      this.form.get(campo)?.setValue(100);
    } else if (valor < 0) {
      this.form.get(campo)?.setValue(0);
    }
  }

  guardarGerZon() {
    console.log('Gerente zona:', this.form.value);
  }
}
