import 'reflect-metadata';
import ibge from '../../../config/axios/ibge';

type IResponseCidade = {
  name: string;
  uf: string;
};

type IRequestUF = {
  uf: string;
};

type IObjectCidade = {
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
};

export class ServiceListCity {
  async execute({ uf }: IRequestUF): Promise<IResponseCidade[]> {
    const res = await ibge.get(`/estados/${uf}/municipios`);
    if (res.status === 200) {
      const data = res.data.map(({ nome, microrregiao }: IObjectCidade) => {
        return {
          name: nome,
          uf: microrregiao.mesorregiao.UF.sigla,
        };
      });
      return data;
    }
    throw Error('Registro não localizado.');
  }
}
