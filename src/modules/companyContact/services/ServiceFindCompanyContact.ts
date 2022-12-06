import CompanyContactRepository from '../repository/CompanyContactRepository';

type IFindCompanyContact = {
  company: string;
  id: string;
};

export class ServiceFindCompanyContact {
  async execute({ company, id }: IFindCompanyContact) {
    const repo = new CompanyContactRepository();

    const data = await repo.findById(company, id);

    if (!data) {
      throw new Error('CompanyContact não encontrado');
    }
    return data;
  }
}
