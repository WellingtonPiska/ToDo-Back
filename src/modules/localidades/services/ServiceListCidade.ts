import 'reflect-metadata';
import ibge from '../../../config/axios/ibge';

interface IResponseCidade {
  nome: string;
  uf: string;
}

interface IRequestUF {
  uf: string;
}

interface IObjectCidade {
  nome: string;
  microrregiao: {
    nome: string;
    mesorregiao: {
      nome: string;
      UF: {
        sigla: string;
        nome: string;
      };
    };
  };
}

export class ServiceListCidade {
  async execute({ uf }: IRequestUF): Promise<IResponseCidade[]> {
    const res = await ibge.get(`/estados/${uf}/municipios`);
    if (res.status == 200) {
      const data = res.data.map(({ nome, microrregiao }: IObjectCidade) => {
        return {
          nome: nome,
          uf: microrregiao.mesorregiao.UF.sigla,
        };
      });
      return data;
    }
    throw Error('Não foi localizado');
  }
}
