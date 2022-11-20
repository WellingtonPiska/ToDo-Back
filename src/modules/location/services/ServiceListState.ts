import 'reflect-metadata';
import ibge from '../../../config/axios/ibge';
import ldap from '../../../config/axios/ldap';

interface IResponseListState {
  uf: string;
  name: string;
}

interface IObjectState {
  sigla: string;
  nome: string;
}

export class ServiceListState {
  async execute(): Promise<IResponseListState[]> {
    const res = await ibge.get('/estados');
    if (res.status == 200) {
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
