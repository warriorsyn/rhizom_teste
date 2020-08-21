import { Injectable } from '@angular/core';
import { UseCase } from '../base/use-case';
import { CarBrandModel } from '../domain/carbrand/carbrand.model';
import { Observable } from 'rxjs';
import { CarBrandRepository } from '../repositories/carbrand/carbrand.repository';

@Injectable({
  providedIn: 'root',
})
export class GetAllCarbrandUsecase implements UseCase<void, CarBrandModel> {
  constructor(private carbrandRepository: CarBrandRepository) {}

  execute(params: void): Observable<CarBrandModel> {
    return this.carbrandRepository.getAllCarBrands();
  }
}
