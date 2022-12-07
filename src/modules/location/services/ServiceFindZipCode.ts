import 'reflect-metadata';
import viacep from '../../../config/axios/viacep';

type IFindZipCode = {
  cep: string;
};

type IResponseFindCep = {
  zipcode: string;
  street: string;
  district: string;
  city: string;
  state: string;
};

export class ServiceFindZipCode {
  async execute({ cep }: IFindZipCode): Promise<IResponseFindCep> {
    const res = await viacep.get(`/${cep}/json`);
    if (res.status === 200) {
      return {
        zipcode: res.data.cep,
        street: res.data.logradouro,
        district: res.data.bairro,
        city: res.data.localidade,
        state: res.data.uf,
      };
    }
    throw Error('Registro não localizado.');
  }
}
