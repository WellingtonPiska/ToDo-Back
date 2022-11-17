import * as yup from 'yup';
import schemaParamIdCentroCusto from './schemaParamIdCentroCusto';

const schemaValidationCentroCustoDelete = yup.object().shape({
  params: schemaParamIdCentroCusto,
});



export default schemaValidationCentroCustoDelete;
