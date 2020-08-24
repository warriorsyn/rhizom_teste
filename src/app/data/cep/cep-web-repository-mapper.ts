import { Mapper } from 'src/app/core/base/mapper';
import { CepWebEntity } from './cep-web-entity';
import { CepModel } from 'src/app/core/domain/cep/cep.model';

export class CepWebRepositoryMapper extends Mapper<CepWebEntity, CepModel> {
  mapFrom(param: CepWebEntity): CepModel {
    return {
      bairro: param.bairro,
      logradouro: param.logradouro,
      localidade: param.localidade,
    };
  }
  mapTo(param: CepModel): CepWebEntity {
    return {
      bairro: param.bairro,
      logradouro: param.logradouro,
      localidade: param.localidade,
    };
  }
}
