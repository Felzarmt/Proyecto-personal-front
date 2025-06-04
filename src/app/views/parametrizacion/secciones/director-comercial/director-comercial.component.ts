import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  standalone: true,
  selector: 'app-director-comercial',
  imports: [ReactiveFormsModule, NgxMaskDirective,CommonModule],
  templateUrl: './director-comercial.component.html',
    styleUrl: './director-comercial.component.scss'
})
export class DirectorComercialComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      dir_bonif: [''],
      dir_mcart: [''],
      dir_mcart_tot: [''],
      dir_capt: [''],
      dir_aport: [''],
      dir_cart: [''],
      dir_exced: [''],
      dir_roda: [''],
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

  guardarDirCom() {
    console.log('Director Comercial:', this.form.value);
  }
}