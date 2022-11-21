import * as yup from 'yup';
import schemaParamIdUser from './schemaParamIdUser';

const schemaValidationUserFind = yup.object().shape({
  params: schemaParamIdUser,
});


export default schemaValidationUserFind;
