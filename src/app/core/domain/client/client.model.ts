import { CarBrandModel } from '../carbrand/carbrand.model';
import { CarmodelModel } from '../carmodel/carmodel.model';

export interface ClientModel {
  id: string;
  name: string;
  cpf: string;
  phone: string;
  birth: string;
  address: string;
  brand: CarBrandModel;
  model: CarmodelModel;
}
