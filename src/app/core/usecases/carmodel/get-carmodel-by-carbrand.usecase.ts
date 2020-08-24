import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarmodelModel } from '../../domain/carmodel/carmodel.model';
import { CarmodelRepository } from '../../repositories/carmodel/carmodel.repository';
import { UseCase } from '../../base/use-case';

@Injectable({
  providedIn: 'root',
})
export class GetCarmodelByCarbrandUsecase
  implements UseCase<string, CarmodelModel> {
  constructor(private carbrandRepository: CarmodelRepository) {}

  execute(params: string): Observable<CarmodelModel> {
    return this.carbrandRepository.getCarmodelByCarbrand(params);
  }
}
