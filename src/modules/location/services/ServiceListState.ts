import 'reflect-metadata';
import ibge from '../../../config/axios/ibge';

type IResponseListState = {
  uf: string;
  name: string;
};

type IObjectState = {
  sigla: string;
  nome: string;
};

export class ServiceListState {
  async execute(): Promise<IResponseListState[]> {
    const res = await ibge.get('/estados');
    if (res.status === 200) {
      const data = res.data.map(({ sigla, nome }: IObjectState) => {
        return {
          uf: sigla,
          name: nome,
        };
      });
      return data;
    }
    throw Error('Registro não localizado.');
  }
}
