import { Mapper } from 'src/app/core/base/mapper';
import { CarmodelWebEntity } from './carmodel-web-entity';
import { CarmodelModel } from 'src/app/core/domain/carmodel/carmodel.model';

export class CarmodelWebRepositoryMapper extends Mapper<
  CarmodelWebEntity,
  CarmodelModel
> {
  mapFrom(param: CarmodelWebEntity): CarmodelModel {
    return {
      id: param.codigo,
      name: param.nome,
    };
  }
  mapTo(param: CarmodelModel): CarmodelWebEntity {
    return {
      codigo: param.id,
      nome: param.name,
    };
  }
}
