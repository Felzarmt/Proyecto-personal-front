import { Component } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-analista-cartera',
  imports: [NgxMaskDirective,ReactiveFormsModule,CommonModule],
  standalone: true,
  templateUrl: './analista-cartera.component.html',
  styleUrl: './analista-cartera.component.scss'
})
export class AnalistaCarteraComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      analista_mora_agencias: [''],
      analista_mora_general: [''],
    });
  }

  guardarAnalista() {
    console.log('Analista de cartera:', this.form.value);
  }
}
