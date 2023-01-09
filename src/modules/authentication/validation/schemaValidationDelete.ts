import * as yup from 'yup';

import schemaParamIdAuthentication from './schemaBodyParamIdAuthentication';

const schemaValidationAuthenticationDelete = yup.object().shape({
  params: schemaParamIdAuthentication,
});

export default schemaValidationAuthenticationDelete;
