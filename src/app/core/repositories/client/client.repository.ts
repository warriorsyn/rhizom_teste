import { Observable } from 'rxjs';
import { ClientModel } from '../../domain/client/client.model';
import { ClientMockEntity } from 'src/app/data/client/client-mock-repository/client-mock-entity';

export abstract class ClientRepository {
  abstract getClients(param: void): Observable<ClientModel>;
  abstract getClientById(id: string): Observable<ClientModel>;
  abstract addClient(param: ClientMockEntity): Observable<void>;
  abstract updateClient(param: ClientMockEntity): Observable<void>;
  abstract deleteClient(id: string): Observable<void>;
}
