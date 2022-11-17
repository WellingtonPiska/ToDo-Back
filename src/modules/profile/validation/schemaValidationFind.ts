import * as yup from 'yup';
import schemaParamIdProfile from './schemaParamIdProfile';

const schemaValidationProfileFind = yup.object().shape({
  params: schemaParamIdProfile,
});


export default schemaValidationProfileFind;
