import { Observable } from 'rxjs';
import { CarmodelModel } from '../../domain/carmodel/carmodel.model';

export abstract class CarmodelRepository {
  abstract getCarmodelByCarbrand(id: string): Observable<CarmodelModel>;
}
