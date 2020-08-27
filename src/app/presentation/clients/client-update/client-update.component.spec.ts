import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientUpdateComponent } from './client-update.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CarBrandRepository } from 'src/app/core/repositories/carbrand/carbrand.repository';
import { CarmodelRepository } from 'src/app/core/repositories/carmodel/carmodel.repository';
import { CarbrandWebRepository } from 'src/app/data/carbrand/carbrand-web-repository/carbrand-web.repository';
import { ClientMockRepository } from 'src/app/data/client/client-mock-repository/client-mock-repository';
import { CepWebRepository } from 'src/app/data/cep/cep-web.repository';
import { ClientRepository } from 'src/app/core/repositories/client/client.repository';
import { CepRepository } from 'src/app/core/repositories/cep/cep.repository';
import { CarmodelWebRepository } from 'src/app/data/carmodel/carmodel-web-repository/carmodel-web.repository';

describe('ClientUpdateComponent', () => {
  let component: ClientUpdateComponent;
  let fixture: ComponentFixture<ClientUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientUpdateComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: CarBrandRepository, useClass: CarbrandWebRepository },
        { provide: CarmodelRepository, useClass: CarmodelWebRepository },
        { provide: ClientRepository, useClass: ClientMockRepository },
        { provide: CepRepository, useClass: CepWebRepository },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
