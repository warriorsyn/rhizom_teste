import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  clientForm: FormGroup;

  @Output() emitFormData = new EventEmitter();

  emitSubmit(data) {
    this.emitFormData.emit(data);
  }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      cep: [''],
      address: ['', [Validators.required]],
      brand: [''],
      model: [''],
    });
  }
}
