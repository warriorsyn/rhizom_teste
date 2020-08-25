import { Mapper } from 'src/app/core/base/mapper';
import { ClientMockEntity } from './client-mock-entity';
import { ClientModel } from 'src/app/core/domain/client/client.model';

export class ClientMockRepositoryMapper extends Mapper<
  ClientMockEntity,
  ClientModel
> {
  mapFrom(param: ClientMockEntity): ClientModel {
    return {
      id: param.id,
      name: param.name,
      address: param.address,
      birth: param.birth,
      cpf: param.cpf,
      phone: param.phone,
      brand: param.brand,
      model: param.model,
    };
  }
  mapTo(param: ClientModel): ClientMockEntity {
    return {
      id: param.id,
      name: param.name,
      address: param.address,
      birth: param.birth,
      cpf: param.cpf,
      phone: param.phone,
      brand: param.brand,
      model: param.model,
    };
  }
}
