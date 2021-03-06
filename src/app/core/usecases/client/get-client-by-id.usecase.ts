import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { ClientModel } from '../../domain/client/client.model';
import { ClientRepository } from '../../repositories/client/client.repository';
import { UseCase } from '../../base/use-case';

@Injectable({
  providedIn: 'root',
})
export class GetClientByIdUsecase implements UseCase<string, ClientModel> {
  constructor(private clientRepository: ClientRepository) {}

  execute(params: string): Observable<ClientModel> {
    return this.clientRepository.getClientById(params);
  }
}
