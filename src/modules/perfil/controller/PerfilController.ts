import { Request, Response } from 'express';

export default class PerfilController {
  public async list(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['Perfil']
    //#swagger.summary = 'List All Perfil'
    const serviceListPerfil = new ServiceListPerfil();

    const perfil = await serviceListPerfil.execute();

    return response.json(perfil);
  }
}
