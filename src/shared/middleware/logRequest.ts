import { NextFunction, Request, Response } from 'express';

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  const log = {
    method: req.method,
    path: req.originalUrl,
    param: req.params,
    query: req.query,
    body: req.body,
    header: req.headers,
    ip: req.socket.remoteAddress,
  };
  next(log);
};

export default logRequest;
