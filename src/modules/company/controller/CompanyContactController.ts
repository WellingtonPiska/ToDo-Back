import { Request, Response } from 'express';
import { ServiceListCompanyContact } from '../services/ServiceListCompanyContact';
import { ServiceFindCompanyContact } from '../services/ServiceFindCompanyContact';

export default class CompanyContactController {
  public async list(request: Request, response: Response): Promise<Response> {
    const { company } = request.params;
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const search = request.query.search
      ? String(request.query.search)
      : undefined;
    const serviceListCompanyContact = new ServiceListCompanyContact();

    const companyContact = await serviceListCompanyContact.execute({
      company,
      page,
      limit,
      search,
    });

    return response.json(companyContact);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    const { company, id } = request.params;
    const serviceFindCompanyContact = new ServiceFindCompanyContact();
    const data = await serviceFindCompanyContact.execute({ company, id });
    return response.json(data);
  }
}
