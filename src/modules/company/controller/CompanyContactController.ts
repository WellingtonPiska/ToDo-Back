import { Request, Response } from 'express';
import { ServiceCreateCompanyContact } from '../services/ServiceCreateCompanyContact';
import { ServiceDeleteCompanyContact } from '../services/ServiceDeleteCompanyContact';
import { ServiceFindCompanyContact } from '../services/ServiceFindCompanyContact';
import { ServiceListCompanyContact } from '../services/ServiceListCompanyContact';
import { ServiceUpdateCompanyContact } from '../services/ServiceUpdateCompanyContact';

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
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, contactType, mail, phone, mobile } = request.body;
    const { company } = request.params;

    const serviceCreateCompanyContact = new ServiceCreateCompanyContact();
    const contactCompany = await serviceCreateCompanyContact.execute({
      name,
      contactType,
      company,
      mail,
      phone,
      mobile
    });

    return response.json(contactCompany);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id, company } = request.params;
    const serviceDeleteCompanyContact = new ServiceDeleteCompanyContact();
    const companyContact = await serviceDeleteCompanyContact.execute({
      id,
      company
    });

    return response.json(companyContact);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, mail, phone, mobile, contactType } = request.body;
    const { id, company } = request.params;


    const serviceUpdateCompanyContact = new ServiceUpdateCompanyContact();
    const companyContact = await serviceUpdateCompanyContact.execute({
      id,
      name,
      mail,
      phone,
      mobile,
      contactType,
      company
    });

    return response.json(companyContact);
  }
}
