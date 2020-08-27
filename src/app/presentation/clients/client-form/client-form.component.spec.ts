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
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ClientFormComponent', () => {
  let component: ClientFormComponent;
  let fixture: ComponentFixture<ClientFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

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
    de = fixture.debugElement.query(By.css('form'));
    el = de.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit form when onSubmit have been called', () => {
    fixture.detectChanges();
    spyOn(component, 'emitSubmit');
    el = fixture.debugElement.query(By.css('button')).nativeElement;
    el.click();
    expect(component.emitSubmit).toHaveBeenCalledTimes(1);
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

  it('form should be valid', () => {
    component.clientForm.controls.name.setValue('Jhson');
    component.clientForm.controls.cpf.setValue('408.666.490-93');
    component.clientForm.controls.phone.setValue('(79) 9 9154-1139');
    component.clientForm.controls.birth.setValue('11/06/2001');
    component.clientForm.controls.address.setValue('Av Anisio Azevedo');
    component.clientForm.controls.brand.setValue({ id: 1, name: 'Brand' });
    component.clientForm.controls.model.setValue({ id: 1, name: 'model' });

    expect(component.clientForm.valid).toBeTrue();
  });
});
