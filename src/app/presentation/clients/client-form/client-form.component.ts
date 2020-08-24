import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { CpfValidator } from '../../shared/validators/cpf.validator';
import { ClientMockEntity } from 'src/app/data/client/client-mock-repository/client-mock-entity';
import { GetAllCarbrandUsecase } from 'src/app/core/usecases/get-all-carbrand.usecase';
import { CarBrandModel } from 'src/app/core/domain/carbrand/carbrand.model';
import { GetCarmodelByCarbrandUsecase } from 'src/app/core/usecases/carmodel/get-carmodel-by-carbrand.usecase';
import { CarmodelModel } from 'src/app/core/domain/carmodel/carmodel.model';
import { GetAddressByCepUsecase } from 'src/app/core/usecases/cep/get-address-by-cep.usecase';
@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss'],
})
export class ClientFormComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private getAllCarbrandUsecase: GetAllCarbrandUsecase,
    private getCarmodelByCarbrandUsecase: GetCarmodelByCarbrandUsecase,
    private getAddressByCepUsecase: GetAddressByCepUsecase
  ) {}

  clientForm: FormGroup;

  carBrands: CarBrandModel[] = [];

  carModels: CarmodelModel[] = [];

  cepInvalid = false;

  telefoneMask = [
    '(',
    /[0-9]/,
    /\d/,
    ')',
    ' ',
    /\d/,
    ' ',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
    '-',
    /\d/,
    /\d/,
    /\d/,
    /\d/,
  ];

  cpfMask = [
    /[0-9]/,
    /\d/,
    /\d/,
    '.',
    /[0-9]/,
    /\d/,
    /\d/,
    '.',
    /[0-9]/,
    /\d/,
    /\d/,
    '-',
    /[0-9]/,
    /\d/,
  ];

  cepMask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /[0-9]/, /\d/, /\d/];

  @Output() emitFormData = new EventEmitter();

  get form() {
    return this.clientForm;
  }

  emitSubmit(data: ClientMockEntity) {
    if (this.clientForm.valid) {
      this.emitFormData.emit(data);
      return;
    }
  }

  clientControl(name: string) {
    return this.clientForm.get(name);
  }

  clientControlIsInvalid(name: string) {
    const control = this.clientControl(name);
    return control.invalid && (control.touched || control.dirty);
  }

  getCarBrands() {
    return this.getAllCarbrandUsecase.execute(null).subscribe((brands) => {
      this.carBrands.push(brands);
    });
  }

  getCarModels(id: string) {
    this.carModels = [];
    this.getCarmodelByCarbrandUsecase.execute(id).subscribe((model) => {
      this.carModels.push(model);
    });
  }

  autocompleteByCep(cep: string) {
    if (cep.length >= 9) {
      this.getAddressByCepUsecase.execute(cep).subscribe(
        (adrs) => {
          this.cepInvalid = false;
          this.clientControl('address').patchValue(
            adrs.logradouro ? adrs.logradouro : adrs.localidade
          );
        },
        (err) => {
          this.cepInvalid = true;
        }
      );
      return;
    }
  }

  ngOnInit(): void {
    this.getCarBrands();
    this.clientForm = this.fb.group({
      id: [uuid()],
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required, CpfValidator]],
      phone: ['', [Validators.required]],
      birth: ['', [Validators.required]],
      cep: [''],
      address: ['', [Validators.required]],
      brand: [''],
      model: [''],
    });
  }
}
