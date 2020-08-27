import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormComponent } from './client-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarmodelRepository } from 'src/app/core/repositories/carmodel/carmodel.repository';
import { ClientRepository } from 'src/app/core/repositories/client/client.repository';
import { CepRepository } from 'src/app/core/repositories/cep/cep.repository';
import { CarBrandRepository } from 'src/app/core/repositories/carbrand/carbrand.repository';
import { CarbrandWebRepository } from 'src/app/data/carbrand/carbrand-web-repository/carbrand-web.repository';
import { CarmodelWebRepository } from 'src/app/data/carmodel/carmodel-web-repository/carmodel-web.repository';
import { ClientMockRepository } from 'src/app/data/client/client-mock-repository/client-mock-repository';
import { CepWebRepository } from 'src/app/data/cep/cep-web.repository';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let fixture: ComponentFixture<ClientFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientFormComponent],
      imports: [ReactiveFormsModule, HttpClientModule, RouterTestingModule],
      providers: [
        { provide: CarBrandRepository, useClass: CarbrandWebRepository },
        { provide: CarmodelRepository, useClass: CarmodelWebRepository },
        { provide: ClientRepository, useClass: ClientMockRepository },
        { provide: CepRepository, useClass: CepWebRepository },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be invalid', () => {
    component.clientForm.controls.name.setValue('');
    component.clientForm.controls.cpf.setValue('');
    component.clientForm.controls.phone.setValue('');
    component.clientForm.controls.birth.setValue('');
    component.clientForm.controls.address.setValue('');
    component.clientForm.controls.brand.setValue('');
    component.clientForm.controls.model.setValue('');
    expect(component.clientForm.valid).toBeFalse();
  });
});
