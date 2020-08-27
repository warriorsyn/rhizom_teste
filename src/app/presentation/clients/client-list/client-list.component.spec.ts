import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientListComponent } from './client-list.component';
import { CarBrandRepository } from 'src/app/core/repositories/carbrand/carbrand.repository';
import { CarbrandWebRepository } from 'src/app/data/carbrand/carbrand-web-repository/carbrand-web.repository';
import { HttpClientModule } from '@angular/common/http';
import { ClientMockRepository } from 'src/app/data/client/client-mock-repository/client-mock-repository';
import { ClientRepository } from 'src/app/core/repositories/client/client.repository';

describe('ClientListComponent', () => {
  let component: ClientListComponent;
  let fixture: ComponentFixture<ClientListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientListComponent],
      imports: [HttpClientModule],
      providers: [
        { provide: CarBrandRepository, useClass: CarbrandWebRepository },
        { provide: ClientRepository, useClass: ClientMockRepository },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should have clients', () => {
  //   expect(component.clients.length).toEqual(1);
  // });
});
