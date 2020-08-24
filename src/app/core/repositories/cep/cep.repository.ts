import { Observable } from 'rxjs';
import { CepModel } from '../../domain/cep/cep.model';

export abstract class CepRepository {
  abstract getAddressByCep(cep: string): Observable<CepModel>;
}
