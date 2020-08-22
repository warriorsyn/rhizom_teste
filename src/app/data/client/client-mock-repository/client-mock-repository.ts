import { Injectable } from '@angular/core';
import { CarBrandRepository } from 'src/app/core/repositories/carbrand/carbrand.repository';
import { Observable, from } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';

import { ClientRepository } from 'src/app/core/repositories/client/client.repository';
import { ClientMockRepositoryMapper } from './client-mock-repository-mapper';
import { ClientModel } from 'src/app/core/domain/client/client.model';

@Injectable({
  providedIn: 'root',
})
export class ClientMockRepository extends ClientRepository {
  constructor(private http: HttpClient) {
    super();
    if (
      localStorage.getItem('employees') === null ||
      localStorage.getItem('employees') == undefined
    ) {
      localStorage.setItem('clients', JSON.stringify([]));
    } else {
      return;
    }
  }
  mapper = new ClientMockRepositoryMapper();
  addClient(param: ClientModel): Observable<void> {
    const clients: ClientModel[] = JSON.parse(localStorage.getItem('clients'));

    clients.push(param);
    localStorage.setItem('clients', JSON.stringify(clients));

    return new Observable();
  }
}
