import 'reflect-metadata';
import ibge from '../../../config/axios/ibge';

interface IFindUF {
  uf: string;
}

interface IResponseFindUF {
  id: number;
}

export class ServiceFindUF {
  async execute({ uf }: IFindUF) {
    const res = await ibge.get(`/estados/${uf}`);
    if (res.status == 200) {
      return {
        sigla: res.data.sigla,
        nome: res.data.nome,
      };
    }
    throw Error('Não foi localizado');
  }
}
