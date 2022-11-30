import CompanyContactRepository from '../repository/CompanyContactRepository';

interface IFindCompanyContact {
  company: string;
  id: string;
}

export class ServiceFindCompanyContact {
  async execute({ company, id }: IFindCompanyContact) {
    const repo = new CompanyContactRepository();

    const data = await repo.findById(company, id);

    if (!data) {
      throw new Error('Company não encontrado');
    }
    return data;
  }
}
