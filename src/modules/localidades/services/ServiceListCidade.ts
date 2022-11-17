import 'reflect-metadata';
import ibge from '../../../config/axios/ibge';

interface IResponseCidade {
  id: number;
}

interface IUF {
  uf: string;
}

export class ServiceListCidade {
  async execute({ uf }: IUF): Promise<IResponseCidade[]> {
    const res = await ibge.get(`/estados/${uf}/municipios?view=nivelado`);
    if (res.status == 200) {
      return res.data;
    }
    throw Error('Não foi localizado');
  }
}
