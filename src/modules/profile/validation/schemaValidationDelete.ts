import * as yup from 'yup';

import schemaParamIdProfile from './schemaParamIdProfile';

const schemaValidationProfileDelete = yup.object().shape({
  params: schemaParamIdProfile,
});

export default schemaValidationProfileDelete;
