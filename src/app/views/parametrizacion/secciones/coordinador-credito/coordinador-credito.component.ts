import { Component } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-coordinador-credito',
  imports: [NgxMaskDirective,ReactiveFormsModule,CommonModule],
  templateUrl: './coordinador-credito.component.html',
  styleUrl: './coordinador-credito.component.scss'
})
export class CoordinadorCreditoComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      coocred_bonif: [''],
    });
  }

  guardarCooCred() {
    console.log('Coordinador de credito:', this.form.value);
  }
}
