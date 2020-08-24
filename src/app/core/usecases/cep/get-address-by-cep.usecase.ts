import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepModel } from '../../domain/cep/cep.model';
import { UseCase } from '../../base/use-case';
import { CepRepository } from '../../repositories/cep/cep.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAddressByCepUsecase implements UseCase<string, CepModel> {
  constructor(private cepRepository: CepRepository) {}

  execute(params: string): Observable<CepModel> {
    return this.cepRepository.getAddressByCep(params);
  }
}
