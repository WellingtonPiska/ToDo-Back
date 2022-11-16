import * as yup from 'yup';
import schemaParamIdCentroCusto from './schemaParamIdCentroCusto';


const schemaValidationCentroCustoFind = yup.object().shape({
  params: schemaParamIdCentroCusto,
});


export default schemaValidationCentroCustoFind;
