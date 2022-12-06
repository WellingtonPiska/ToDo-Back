import * as yup from 'yup';

import schemaParamIdModel from './schemaParamIdModel';

const schemaValidationModelFind = yup.object().shape({
  params: schemaParamIdModel,
});

export default schemaValidationModelFind;
