import 'reflect-metadata';
import ibge from '../../../config/axios/ibge';

interface IResponseListUF {
  id: number;
}

export class ServiceListUF {
  async execute(): Promise<IResponseListUF[]> {
    const res = await ibge.get('/estados');
    if (res.status == 200) {
      return res.data;
    }
    throw Error('Não foi localizado');
  }
}
