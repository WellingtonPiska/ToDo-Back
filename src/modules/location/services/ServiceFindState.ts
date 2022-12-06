import 'reflect-metadata';
import ibge from '../../../config/axios/ibge';

type IFindState = {
  uf: string;
};

type IResponseListState = {
  uf: string;
  name: string;
};

export class ServiceFindState {
  async execute({ uf }: IFindState): Promise<IResponseListState> {
    const res = await ibge.get(`/estados/${uf}`);
    if (res.status === 200) {
      return {
        uf: res.data.sigla,
        name: res.data.nome,
      };
    }
    throw Error('Registro não localizado.');
  }
}
