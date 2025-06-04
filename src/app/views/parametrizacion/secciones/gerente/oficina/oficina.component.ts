import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  standalone: true,
  selector: 'app-oficina',
  imports: [ReactiveFormsModule, NgxMaskDirective, CommonModule],
  templateUrl: './oficina.component.html',
  styleUrl: './oficina.component.scss'
})
export class GerenteOficinaComponent {
  form: FormGroup;

  categorias: string[] = [
    'Hasta 5.000 millones',
    'Entre 5.000 y 7.000 millones',
    'Entre 9.000 y 12.000 millones',
    'Entre 12.000 y 16.000 millones',
    'Más de 16.000 millones'
  ];

  categoriaSeleccionada: string = '';

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      of_mcart_tot: [''],
      of_mcart_may: [''],
      of_aport: [''],
      of_accapt: [''],
      of_accart: [''],
      of_exced: [''],
      of_roda: [''],
      categoriaSeleccionada: [''],
      variableComision: [''],
      adicionalExcedente: [''],
    });
  }

  onCategoriaChange() {
    this.categoriaSeleccionada = this.form.get('categoriaSeleccionada')?.value;
  }

  validarPorcentaje(campo: string): void {
    const valor = this.form.get(campo)?.value;
    if (valor > 100) {
      this.form.get(campo)?.setValue(100);
    } else if (valor < 0) {
      this.form.get(campo)?.setValue(0);
    }
  }

  guardarGerOf() {
    console.log('Gerente de oficina:', this.form.value);
  }
}