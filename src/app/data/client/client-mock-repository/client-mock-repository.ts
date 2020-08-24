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
      console.log('No clients Found... Creating...');

      localStorage.setItem('clients', JSON.stringify([]));
      return;
    } else {
      console.log('Found clients...');
    }
  }
  mapper = new ClientMockRepositoryMapper();

  deleteClient(id: string): Observable<void> {
    const clients: ClientMockEntity[] = JSON.parse(
      localStorage.getItem('clients')
    );

    const find = clients.indexOf(clients.find((val) => val.id === id));

    clients.splice(find, 1);

    localStorage.setItem('clients', JSON.stringify(clients));

    return from([]);
  }

  getClients(param: void): Observable<ClientModel> {
    const clients: ClientMockEntity[] = JSON.parse(
      localStorage.getItem('clients')
    );

    return from(clients).pipe(map(this.mapper.mapFrom));
  }

  addClient(param: ClientMockEntity): Observable<void> {
    const clients: ClientMockEntity[] = JSON.parse(
      localStorage.getItem('clients')
    );

    clients.push(param);
    localStorage.setItem('clients', JSON.stringify(clients));

    return new Observable();
  }
}
