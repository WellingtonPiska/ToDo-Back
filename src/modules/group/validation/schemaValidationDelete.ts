import * as yup from 'yup';
import schemaParamIdGroup from './schemaParamIdGroup';

const schemaValidationGroupDelete = yup.object().shape({
  params: schemaParamIdGroup,
});



export default schemaValidationGroupDelete;
