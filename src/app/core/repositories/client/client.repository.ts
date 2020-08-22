import { Observable } from 'rxjs';
import { ClientModel } from '../../domain/client/client.model';

export abstract class ClientRepository {
  abstract addClient(param: ClientModel): Observable<void>;
}
