import { Request, Response } from 'express';

export default class MulterController {
  public async import(request: Request, response: Response): Promise<Response> {
    console.log('teste');
    return response.json('ok');
  }
}
