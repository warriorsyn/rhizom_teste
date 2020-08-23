import { Injectable } from '@angular/core';
import { CarBrandRepository } from 'src/app/core/repositories/carbrand/carbrand.repository';
import { Observable, from } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';

import { ClientRepository } from 'src/app/core/repositories/client/client.repository';
import { ClientMockRepositoryMapper } from './client-mock-repository-mapper';
import { ClientModel } from 'src/app/core/domain/client/client.model';
import { ClientMockEntity } from './client-mock-entity';

@Injectable({
  providedIn: 'root',
})
export class ClientMockRepository extends ClientRepository {
  constructor(private http: HttpClient) {
    super();
    if (
      localStorage.getItem('clients') === null ||
      localStorage.getItem('clients') == undefined
    ) {
      console.log('No Todos Found... Creating...');

      localStorage.setItem('clients', JSON.stringify([]));
      return;
    } else {
      console.log('Found clients...');
    }
  }
  mapper = new ClientMockRepositoryMapper();

  getClients(param: void): Observable<ClientModel> {
    const clients: ClientMockEntity[] = JSON.parse(
      localStorage.getItem('clients')
    );

    return from(clients).pipe(map(this.mapper.mapFrom));
  }
  addClient(param: ClientModel): Observable<void> {
    const clients: ClientModel[] = JSON.parse(localStorage.getItem('clients'));

    clients.push(param);
    localStorage.setItem('clients', JSON.stringify(clients));

    return new Observable();
  }
}
