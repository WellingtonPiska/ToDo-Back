import * as yup from 'yup';
import schemaParamIdContactType from './schemaParamIdContactType';

const schemaValidationContactTypeDelete = yup.object().shape({
  params: schemaParamIdContactType,
});



export default schemaValidationContactTypeDelete;
