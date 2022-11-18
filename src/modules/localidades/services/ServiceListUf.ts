import 'reflect-metadata';
import ibge from '../../../config/axios/ibge';
import ldap from '../../../config/axios/ldap';

interface IResponseListUF {
  sigla: string;
  nome: string;
}

interface IObjectUF {
  sigla: string;
  nome: string;
}

export class ServiceListUF {
  async execute(): Promise<IResponseListUF[]> {
    const res = await ibge.get('/estados');
    if (res.status == 200) {
      const data = res.data.map(({ sigla, nome }: IObjectUF) => {
        return {
          sigla: sigla,
          nome: nome,
        };
      });
      return data;
    }
    throw Error('Não foi localizado');
  }
}
