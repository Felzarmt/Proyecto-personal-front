import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-integral',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective,CommonModule],
  templateUrl: './integral.component.html',
  styleUrl: './integral.component.scss'
})
export class AsesorIntegralComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      int_colocacion: [''],
      int_captacion: [''],
      int_mora_total: [''],
      int_mora_mayor_treinta: [''],
      int_aporte: [''],
      int_rodamiento: [''],
      int_colocacion_e: [''],
      int_mora_total_e: [''],
      int_mora_mayor_treinta_e: [''],
      int_aporte_e: [''],
      int_rodamiento_e: [''],
      bonif_int:[''],
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

  guardarAsInt() {
    console.log('Integral:', this.form.value);
  }
}