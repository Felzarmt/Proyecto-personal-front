import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-microcredito',
  standalone: true,
  imports: [ReactiveFormsModule, NgxMaskDirective],
  templateUrl: './microcredito.component.html',
  styleUrl: './microcredito.component.scss',
})
export class AsesorMicrocreditoComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      micro_colocacion: [''],
      micro_mora_total: [''],
      micro_mora_treinta: [''],
      micro_aporte: [''],
      micro_rodamiento: [''],

      meta_junior: [''],
      llave_junior: [''],
      bonif_junior: [''],

      meta_master: [''],
      llave_master: [''],
      bonif_master: [''],

      meta_senior: [''],
      llave_senior: [''],
      bonif_senior: [''],
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

  guardarAsMic() {
    console.log('Microcrédito:', this.form.value);
  }
}
