import * as yup from 'yup';
import schemaParamUf from './schemaParamUF';

const schemaValidationUFFind = yup.object().shape({
  params: schemaParamUf,
});

export default schemaValidationUFFind;
