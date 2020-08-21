import { Injectable } from '@angular/core';
import { CarBrandRepository } from 'src/app/core/repositories/carbrand/carbrand.repository';
import { Observable } from 'rxjs';
import { CarBrandModel } from 'src/app/core/domain/carbrand/carbrand.model';
import { CarbrandWebRepositoryMapper } from './carbrand-web-repository-mapper';
import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
import { CarbrandWebEnity } from './carbrand-web-entity';

@Injectable({
  providedIn: 'root',
})
export class CarbrandWebRepository extends CarBrandRepository {
  mapper = new CarbrandWebRepositoryMapper();

  constructor(private http: HttpClient) {
    super();
  }

  getAllCarBrands(): Observable<CarBrandModel> {
    return this.http
      .get<CarbrandWebEnity[]>(
        `https://parallelum.com.br/fipe/api/v1/carros/marcas`
      )
      .pipe(flatMap((item) => item))
      .pipe(map(this.mapper.mapFrom));
  }
}
