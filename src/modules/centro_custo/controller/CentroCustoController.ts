import { Request, Response } from 'express';
import { ServiceCreateCentroCusto } from '../services/ServiceCreateCentroCusto';
import { ServiceFindCentroCusto } from '../services/ServiceFindCentroCusto';
import { ServiceListCentroCusto } from '../services/ServiceListCentroCusto';
import { ServiceUpdateCentroCusto } from '../services/ServiceUpdateCentroCusto';


export default class CentroCustoController {
  public async list(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['CentroCusto']
    //#swagger.summary = 'List All CentroCusto'
    const serviceListCentroCusto = new ServiceListCentroCusto();

    const CentroCusto = await serviceListCentroCusto.execute();

    return response.json(CentroCusto);
  }

  public async find(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['CentroCusto']
    const { id } = request.params;

    const serviceFindCentroCusto = new ServiceFindCentroCusto();

    const centro_custo = await serviceFindCentroCusto.execute({ id });

    return response.json(centro_custo);
  }
  public async create(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['CentroCusto']
    const { nome, rateio, obs, status } = request.body;

    const serviceCreateCentroCusto = new ServiceCreateCentroCusto();
    const centroCusto = await serviceCreateCentroCusto.execute({
      nome,
      rateio,
      obs,
      status
    });

    return response.json(centroCusto);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    //#swagger.tags = ['CentroCusto']
    const { nome, rateio, obs, status } = request.body;
    const { id } = request.params;

    const serviceUpdateCentroCusto = new ServiceUpdateCentroCusto();
    const centroCusto = await serviceUpdateCentroCusto.execute({
      id,
      nome,
      rateio,
      obs,
      status
    });

    return response.json(centroCusto);
  }


  // public async delete(request: Request, response: Response): Promise<Response> {
  // #swagger.tags = ['CentroCusto']
  // const { id } = request.params;
  // const serviceDeleteCentroCusto = new ServiceDeleteCentroCusto();
  // const centroCusto = await serviceDeleteCentroCusto.execute({
  //   id,
  // });

  // return response.json(centroCusto);

  // }

}
