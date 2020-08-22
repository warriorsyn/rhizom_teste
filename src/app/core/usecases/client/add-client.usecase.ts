import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { UseCase } from '../../base/use-case';
import { ClientRepository } from '../../repositories/client/client.repository';
import { ClientModel } from '../../domain/client/client.model';

@Injectable({
  providedIn: 'root',
})
export class AddClientUsecase implements UseCase<ClientModel, void> {
  constructor(private clientRepository: ClientRepository) {}

  execute(params: ClientModel): Observable<void> {
    return this.clientRepository.addClient(params);
  }
}
