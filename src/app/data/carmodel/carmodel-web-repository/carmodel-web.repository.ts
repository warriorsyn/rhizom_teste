import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
import { CarmodelWebRepositoryMapper } from './carmodel-web-repository-mapper';
import { CarmodelModel } from 'src/app/core/domain/carmodel/carmodel.model';
import { CarmodelRepository } from 'src/app/core/repositories/carmodel/carmodel.repository';
import {
  CarmodelWebEntity,
  CarmodelWebEntityCore,
} from './carmodel-web-entity';

@Injectable({
  providedIn: 'root',
})
export class CarmodelWebRepository extends CarmodelRepository {
  mapper = new CarmodelWebRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getCarmodelByCarbrand(id: string): Observable<CarmodelModel> {
    console.log(id);
    return this.http
      .get<CarmodelWebEntityCore>(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas/${id}/modelos`
      )
      .pipe(flatMap((item) => item.modelos))
      .pipe(map(this.mapper.mapFrom));
  }
}
