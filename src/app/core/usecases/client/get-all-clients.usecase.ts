import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ClientModel } from '../../domain/client/client.model';
import { ClientRepository } from '../../repositories/client/client.repository';
import { UseCase } from '../../base/use-case';

@Injectable({
  providedIn: 'root',
})
export class GetAllClientsUsecase implements UseCase<void, ClientModel> {
  constructor(private clientRepository: ClientRepository) {}

  execute(params: void): Observable<ClientModel> {
    return this.clientRepository.getClients();
  }
}
