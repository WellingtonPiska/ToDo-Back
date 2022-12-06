import * as yup from 'yup';

import schemaParamIdStatus from './schemaParamIdStatus';

const schemaValidationStatusDelete = yup.object().shape({
  params: schemaParamIdStatus,
});

export default schemaValidationStatusDelete;
