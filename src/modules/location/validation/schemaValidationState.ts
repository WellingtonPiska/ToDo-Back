import * as yup from 'yup';

import schemaParamState from './schemaParamState';

const schemaValidationState = yup.object().shape({
  params: schemaParamState,
});

export default schemaValidationState;
