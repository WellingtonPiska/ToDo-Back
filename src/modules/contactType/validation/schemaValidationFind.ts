import * as yup from 'yup';

import schemaParamIdContactType from './schemaParamIdContactType';

const schemaValidationContactTypeFind = yup.object().shape({
  params: schemaParamIdContactType,
});

export default schemaValidationContactTypeFind;
