import { NextFunction, Request, Response } from 'express';

import AppError from '../errors/AppError';

type IReturn = {
  [key: string]: string;
};

export default function showError(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log(error);

  if (error instanceof AppError) {
    const ret: IReturn = {};
    ret.status = 'error';
    ret.message = error.message;
    if (error.extra) {
      ret.code = error.extra;
    }
    return response.status(error.code).json(ret);
  }
  if (error instanceof Error) {
    return response.status(400).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}
