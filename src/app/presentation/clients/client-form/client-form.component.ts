import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { CpfValidator } from '../../shared/validators/cpf.validator';
import { ClientMockEntity } from 'src/app/data/client/client-mock-repository/client-mock-entity';
import { GetAllCarbrandUsecase } from 'src/app/core/usecases/get-all-carbrand.usecase';
import { CarBrandModel } from 'src/app/core/domain/carbrand/carbrand.model';
import { GetCarmodelByCarbrandUsecase } from 'src/app/core/usecases/carmodel/get-carmodel-by-carbrand.usecase';
import { CarmodelModel } from 'src/app/core/domain/carmodel/carmodel.model';
import { GetAddressByCepUsecase } from 'src/app/core/usecases/cep/get-address-by-cep.usecase';
import { ClientModel } from 'src/app/core/domain/client/client.model';
import { BirthValidator } from '../../shared/validators/birth.validator';
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

  @Input() client: ClientModel;

  clientForm: FormGroup;

  carBrands: CarBrandModel[] = [];

  carModels: CarmodelModel[] = [];

  selectedBrand: CarBrandModel;
  selectedModel: CarmodelModel;

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
    // Emit os dados do form para outros componentes
    if (this.clientForm.valid) {
      // Envia apenas se estiver válido
      this.emitFormData.emit(data);
      return;
    }
  }

  clientControl(name: string): AbstractControl {
    // Retorna um AbstractControl
    return this.clientForm.get(name);
  }

  clientControlIsInvalid(name: string) {
    // Verifica se campo de input é invalido
    const control = this.clientControl(name);
    return control.invalid && (control.touched || control.dirty);
  }

  getCarBrands() {
    // Popular array com marcas de carros
    return this.getAllCarbrandUsecase.execute(null).subscribe((brands) => {
      this.carBrands.push(brands);
    });
  }

  getCarModels() {
    // Popular array com os modulos de carros
    this.carModels = [];
    this.getCarmodelByCarbrandUsecase
      .execute(this.clientControl('brand').value.id)
      .subscribe((model) => {
        this.carModels.push(model);
      });
  }

  autocompleteByCep(cep: string) {
    // Realiza autocomplete do endereço pelo cep
    this.getAddressByCepUsecase.execute(cep).subscribe(
      (adrs) => {
        this.cepInvalid = false;
        this.clientControl('address').patchValue(
          adrs.logradouro ? adrs.logradouro : adrs.localidade
        );
      },
      () => {
        this.cepInvalid = true;
      }
    );
    return;
  }

  compareById(itemOne: any, itemTwo: any) {
    // Compara dois items para ser exibido como selected no input select
    return itemOne && itemTwo && itemOne.id === itemTwo.id;
  }

  ngOnInit(): void {
    this.getCarBrands();
    this.clientForm = this.fb.group({
      id: [uuid()],
      name: ['', [Validators.required]],
      cpf: ['', [Validators.required, CpfValidator]],
      phone: ['', [Validators.required]],
      birth: ['', [Validators.required, BirthValidator]],
      cep: [''],
      address: ['', [Validators.required]],
      brand: [''],
      model: [''],
    });

    if (this.client) {
      console.log(this.client);
      this.clientForm.patchValue({
        id: this.client.id,
        name: this.client.name,
        cpf: this.client.cpf,
        phone: this.client.phone,
        birth: this.client.birth,
        cep: '',
        address: this.client.address,
        brand: this.client.brand,
        model: this.client.model,
      });

      this.getCarModels();
    }
  }
}
