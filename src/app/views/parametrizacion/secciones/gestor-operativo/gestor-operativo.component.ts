import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gestor-operativo',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective, CommonModule],
  templateUrl: './gestor-operativo.component.html',
  styleUrl: './gestor-operativo.component.scss'
})
export class GestorOperativoComponent {
  form: FormGroup;
  agencias: string[] = [
    'Buga', 'Chinchiná', 'Santa Rosa', 'Ibagué', 'Cali',
    'Tuluá', 'Pereira', 'Cartago', 'La Unión'
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      ges_bonif: [''], 
      agenciaSeleccionada: [''],
      metaCaptacionTemp: ['']
    });
  }

  metasPorAgencia: Record<string, number> = {};

  guardarMetaCaptacionTemporal(): void {
    const agencia = this.form.get('agenciaSeleccionada')?.value;
    const valor = this.form.get('metaCaptacionTemp')?.value;
  
    if (agencia) {
      this.metasPorAgencia[agencia] = valor;
      this.form.get('metaCaptacionTemp')?.reset();
      this.form.get('agenciaSeleccionada')?.reset();
    }
  }

  onAgenciaChange(): void {
    const agencia = this.form.get('agenciaSeleccionada')?.value;
    const valor = this.metasPorAgencia[agencia] ?? '';
    this.form.get('metaCaptacionTemp')?.setValue(valor);
  }

  guardarGes() {
    console.log('Gestor operativo:', this.form.value);
  }
}