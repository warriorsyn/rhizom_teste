import { CarBrandModel } from 'src/app/core/domain/carbrand/carbrand.model';
import { CarmodelModel } from 'src/app/core/domain/carmodel/carmodel.model';

export interface ClientMockEntity {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  birth: string;
  address: string;
  brand: CarBrandModel;
  model: CarmodelModel;
}
