import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCreateComponent } from './client-create.component';
import { ClientMockRepository } from 'src/app/data/client/client-mock-repository/client-mock-repository';
import { ClientRepository } from 'src/app/core/repositories/client/client.repository';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('ClientCreateComponent', () => {
  let component: ClientCreateComponent;
  let fixture: ComponentFixture<ClientCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientCreateComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ClientRepository, useClass: ClientMockRepository },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
