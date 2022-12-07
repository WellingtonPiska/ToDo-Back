import * as yup from 'yup';

import schemaParamZipCode from './schemaParamZipCode';

const schemaValidationZipCode = yup.object().shape({
  params: schemaParamZipCode,
});

export default schemaValidationZipCode;
