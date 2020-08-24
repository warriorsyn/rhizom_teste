import { Observable } from 'rxjs';
import { ClientModel } from '../../domain/client/client.model';

export abstract class ClientRepository {
  abstract getClients(param: void): Observable<ClientModel>;
  abstract addClient(param: ClientModel): Observable<void>;
  abstract deleteClient(id: string): Observable<void>;
}
