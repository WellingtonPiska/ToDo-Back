import { Request, Response } from 'express';

import { ServiceCreateCompany } from '../services/ServiceCreateCompany';
import { ServiceDeleteCompany } from '../services/ServiceDeleteCompany';
import { ServiceFindCompany } from '../services/ServiceFindCompany';
import { ServiceListCompany } from '../services/ServiceListCompany';
import { ServiceUpdateCompany } from '../services/ServiceUpdateCompany';

export default class CompanyController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';

    const search = request.query.search
      ? String(request.query.search)
      : undefined;
    const serviceListCompany = new ServiceListCompany();

    const company = await serviceListCompany.execute({
      page,
      limit,
      ref,
      search,
    });

    return response.json(company);
  }
  public async find(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const serviceFindCompany = new ServiceFindCompany();

    const company = await serviceFindCompany.execute({ id });

    return response.json(company);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      status,
      fantasy,
      type,
      inscription,
      zipCode,
      street,
      complement,
      number,
      district,
      city,
      state,
      contacts,
    } = request.body;

    const serviceCreateCompany = new ServiceCreateCompany();
    const company = await serviceCreateCompany.execute({
      name,
      status,
      fantasy,
      type,
      inscription,
      zipCode,
      street,
      complement,
      number,
      district,
      city,
      state,
      contacts,
    });

    return response.json(company);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const {
      name,
      status,
      fantasy,
      type,
      inscription,
      zipCode,
      street,
      complement,
      number,
      district,
      city,
      state,
    } = request.body;
    const { id } = request.params;

    const serviceUpdateCompany = new ServiceUpdateCompany();
    const company = await serviceUpdateCompany.execute({
      id,
      name,
      status,
      fantasy,
      type,
      inscription,
      zipCode,
      street,
      complement,
      number,
      district,
      city,
      state,
    });

    return response.json(company);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const serviceDeleteCompany = new ServiceDeleteCompany();
    const company = await serviceDeleteCompany.execute({
      id,
    });

    return response.json(company);
  }
}
