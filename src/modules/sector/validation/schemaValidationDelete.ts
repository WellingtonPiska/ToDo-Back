import * as yup from 'yup';

import schemaParamIdPlace from './schemaParamIdPlace';

const schemaValidationPlaceDelete = yup.object().shape({
  params: schemaParamIdPlace,
});

export default schemaValidationPlaceDelete;
