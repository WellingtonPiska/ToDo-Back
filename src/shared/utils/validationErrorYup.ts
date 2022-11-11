import { ValidationError } from 'yup';

type ErrorObject = {
  [field: string]: string[];
};

export default function validationErrorYup(err: ValidationError): ErrorObject {
  const object: ErrorObject = {};

  err.inner.forEach(x => {
    if (x.path !== undefined) {
      object[x.path] = x.errors;
    }
  });

  return object;
}
