import CompanyRepository from '../repository/CompanyRepository';

type IFindCompany = {
  id: string;
};

export class ServiceFindCompany {
  async execute({ id }: IFindCompany) {
    const repo = new CompanyRepository();

    const data = await repo.findById(id);

    if (!data) {
      throw new Error('Company não encontrado');
    }
    return data;
  }
}
