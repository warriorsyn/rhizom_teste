export interface CarmodelWebEntity {
  codigo: number;
  nome: string;
}

export interface CarmodelWebEntityCore {
  modelos: CarmodelWebEntity[];
  anos: [];
}
