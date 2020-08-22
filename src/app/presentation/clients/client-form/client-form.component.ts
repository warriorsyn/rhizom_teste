import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
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
    if (this.clientForm.valid) {
      this.emitFormData.emit(data);
      return;
    }
  }

  ngOnInit(): void {
    this.clientForm = this.fb.group({
      id: [uuid()],
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
