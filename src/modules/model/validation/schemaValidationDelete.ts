import * as yup from 'yup';

import schemaParamIdModel from './schemaParamIdModel';

const schemaValidationModelDelete = yup.object().shape({
  params: schemaParamIdModel,
});

export default schemaValidationModelDelete;
