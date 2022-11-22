import { Request, Response } from 'express';
import { ServiceCreateProfile } from '../services/ServiceCreateProfile';
import { ServiceDeleteProfile } from '../services/ServiceDeleteProfile';
import { ServiceFindProfile } from '../services/ServiceFindProfile';
import { ServiceListProfile } from '../services/ServiceListProfile';
import { ServiceUpdateProfile } from '../services/ServiceUpdateProfile';

export default class ProfileController {
  public async list(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Perfil']
    //#swagger.summary = 'List All Perfil'
    const serviceListProfile = new ServiceListProfile();

    const profile = await serviceListProfile.execute();

    return response.json(profile);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Status']
    const { id } = request.params;

    const serviceFindProfile = new ServiceFindProfile();

    const profile = await serviceFindProfile.execute({ id });

    return response.json(profile);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Status']
    const { name, obs, status } = request.body;

    const serviceCreateProfile = new ServiceCreateProfile();
    const result = await serviceCreateProfile.execute({
      name,
      obs,
      status,
    });

    return response.json(result);
  }
  public async update(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['CentroCusto']
    const { name, obs, status } = request.body;
    const { id } = request.params;

    const serviceUpdateProfile = new ServiceUpdateProfile();
    const profile = await serviceUpdateProfile.execute({
      id,
      name,
      obs,
      status,
    });

    return response.json(profile);
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Profile']
    const { id } = request.params;
    const serviceDeleteProfile = new ServiceDeleteProfile();
    const profile = await serviceDeleteProfile.execute({
      id,
    });

    return response.json(profile);
  }
}
