import * as yup from 'yup';
import schemaBodyCentroCusto from './schemaBodyCentroCusto';

const schemaValidationCentroCustoCreate = yup.object().shape({
  body: schemaBodyCentroCusto
});



export default schemaValidationCentroCustoCreate;


