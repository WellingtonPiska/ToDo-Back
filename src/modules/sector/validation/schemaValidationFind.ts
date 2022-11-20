import * as yup from 'yup';
import schemaParamIdPlace from './schemaParamIdPlace';


const schemaValidationPlaceFind = yup.object().shape({
  params: schemaParamIdPlace,
});


export default schemaValidationPlaceFind;
