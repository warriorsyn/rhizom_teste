import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClientModel } from '../../domain/client/client.model';
import { ClientRepository } from '../../repositories/client/client.repository';
import { UseCase } from '../../base/use-case';
import { ClientMockEntity } from 'src/app/data/client/client-mock-repository/client-mock-entity';

@Injectable({
  providedIn: 'root',
})
export class UpdateClientUsecase implements UseCase<ClientMockEntity, void> {
  constructor(private clientRepository: ClientRepository) {}

  execute(params: ClientMockEntity): Observable<void> {
    return this.clientRepository.updateClient(params);
  }
}
