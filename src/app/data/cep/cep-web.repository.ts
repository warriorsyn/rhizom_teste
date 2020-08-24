import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, flatMap } from 'rxjs/operators';
import { CepRepository } from 'src/app/core/repositories/cep/cep.repository';
import { CepWebRepositoryMapper } from './cep-web-repository-mapper';
import { CepModel } from 'src/app/core/domain/cep/cep.model';
import { CepWebEntity } from './cep-web-entity';

@Injectable({
  providedIn: 'root',
})
export class CepWebRepository extends CepRepository {
  constructor(private http: HttpClient) {
    super();
  }
  mapper = new CepWebRepositoryMapper();

  getAddressByCep(cep: string): Observable<CepModel> {
    return this.http
      .get<CepWebEntity>(`https://viacep.com.br/ws/${cep}/json/`)
      .pipe(map(this.mapper.mapFrom));
  }
}
