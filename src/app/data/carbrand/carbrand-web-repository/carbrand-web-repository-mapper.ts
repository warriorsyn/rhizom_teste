import { Mapper } from 'src/app/core/base/mapper';
import { CarbrandWebEnity } from './carbrand-web-entity';
import { CarBrandModel } from 'src/app/core/domain/carbrand/carbrand.model';

export class CarbrandWebRepositoryMapper extends Mapper<
  CarbrandWebEnity,
  CarBrandModel
> {
  mapFrom(param: CarbrandWebEnity): CarBrandModel {
    return {
      id: param.codigo,
      name: param.nome,
    };
  }
  mapTo(param: CarBrandModel): CarbrandWebEnity {
    return {
      codigo: param.id,
      nome: param.name,
    };
  }
}
