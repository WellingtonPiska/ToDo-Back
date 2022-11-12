import { NextFunction, Request, Response } from 'express';
import { AnySchema } from 'yup';
import validatorErrorYup from '../utils/validationErrorYup';

const ensureValidationYupRequest =
  (schema: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await schema.validate(
        {
          body: req.body,
          query: req.query,
          params: req.params,
        },
        { strict: true, abortEarly: false }
      );
      next();
    } catch (err: any) {
      const object = validatorErrorYup(err);
      res.status(400).json(object);
    }
  };

export default ensureValidationYupRequest;
