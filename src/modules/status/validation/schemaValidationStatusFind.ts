import * as yup from 'yup';

import schemaParamIdStatus from './schemaParamIdStatus';

const schemaValidationStatusFind = yup.object().shape({
  params: schemaParamIdStatus,
});

export default schemaValidationStatusFind;
