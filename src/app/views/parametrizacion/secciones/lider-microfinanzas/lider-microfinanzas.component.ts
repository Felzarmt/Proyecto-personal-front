import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-lider-microfinanzas',
  standalone: true,
  imports: [ReactiveFormsModule,NgxMaskDirective,CommonModule],
  templateUrl: './lider-microfinanzas.component.html',
  styleUrl: './lider-microfinanzas.component.scss'
})
export class LiderMicrofinanzasComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      lid_bonif: [''],
      lid_mcart: [''],
      lid_mcart_tot: [''],
      lid_aport: [''],
      lid_cart: [''],
      lid_roda: [''],
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

  guardarLidMicro() {
    console.log('Gerente zona:', this.form.value);
  }
}
