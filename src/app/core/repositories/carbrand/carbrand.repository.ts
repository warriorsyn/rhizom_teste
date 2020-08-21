import { Observable } from 'rxjs';
import { CarBrandModel } from '../../domain/carbrand/carbrand.model';

export abstract class CarBrandRepository {
  abstract getAllCarBrands(): Observable<CarBrandModel>;
}
