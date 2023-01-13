import { Request, Response } from 'express';

export default class BooksController {
  public async list(request: Request, response: Response): Promise<Response> {
    const serviceBooksList = new ServiceBooksList();
    const data = await serviceBooksList.execute();

    response.json(data);
  }
}
