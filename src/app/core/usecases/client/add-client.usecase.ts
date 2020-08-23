import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ClientModel } from '../../domain/client/client.model';
import { ClientRepository } from '../../repositories/client/client.repository';
import { UseCase } from '../../base/use-case';

@Injectable({
  providedIn: 'root',
})
export class AddClientUsecase implements UseCase<ClientModel, void> {
  constructor(private clientRepository: ClientRepository) {}

  execute(params: ClientModel): Observable<void> {
    return this.clientRepository.addClient(params);
  }
}
