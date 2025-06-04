import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-coordinador-cartera',
  imports: [NgxMaskDirective,ReactiveFormsModule,CommonModule],
  templateUrl: './coordinador-cartera.component.html',
  styleUrl: './coordinador-cartera.component.scss'
})
export class CoordinadorCarteraComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      coocart_mora_general: [''],
    });
  }

  guardarCooCart() {
    console.log('Gerente zona:', this.form.value);
  }
}
