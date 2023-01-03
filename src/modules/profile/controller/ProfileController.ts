import { Request, Response } from 'express';

import { ServiceCreateProfile } from '../services/ServiceCreateProfile';
import { ServiceDeleteProfile } from '../services/ServiceDeleteProfile';
import { ServiceEditStatusProfile } from '../services/ServiceEditProfileStatus';
import { ServiceFindProfile } from '../services/ServiceFindProfile';
import { ServiceListProfile } from '../services/ServiceListProfile';
import { ServiceUpdateProfile } from '../services/ServiceUpdateProfile';

export default class ProfileController {
  public async list(request: Request, response: Response): Promise<Response> {
    const page = request.query.page ? Number(request.query.page) : 1;
    const limit = request.query.limit ? Number(request.query.limit) : 15;
    const ref = request.query.ref ? String(request.query.ref) : 'A';

    const search = request.query.search
      ? String(request.query.search)
      : undefined;
    const serviceListProfile = new ServiceListProfile();

    const profile = await serviceListProfile.execute({
      page,
      limit,
      ref,
      search,
    });
    return response.json(profile);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Status']
    const { id } = request.params;

    const serviceFindProfile = new ServiceFindProfile();

    const profile = await serviceFindProfile.execute({ id });

    return response.json(profile);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Status']
    const { name, obs } = request.body;

    const serviceCreateProfile = new ServiceCreateProfile();
    const result = await serviceCreateProfile.execute({
      name,
      obs,
    });

    return response.json(result);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, obs } = request.body;
    const { id } = request.params;

    const serviceUpdateProfile = new ServiceUpdateProfile();
    const profile = await serviceUpdateProfile.execute({
      id,
      name,
      obs,
    });

    return response.json(profile);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    // #swagger.tags = ['Profile']
    const { id } = request.params;
    const serviceDeleteProfile = new ServiceDeleteProfile();
    const deleted = await serviceDeleteProfile.execute({
      id,
    });
    return response.json(deleted);
  }
  public async editStatusProfile(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;
    const { ref } = request.body;

    const serviceEditStatusProfile = new ServiceEditStatusProfile();
    const profile = await serviceEditStatusProfile.execute({
      id,
      ref,
    });

    return response.json(profile);
  }
}
