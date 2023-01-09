import * as yup from 'yup';

import schemaParamIdAuthentication from './schemaBodyParamIdAuthentication';

const schemaValidationAuthenticationFind = yup.object().shape({
  params: schemaParamIdAuthentication,
});

export default schemaValidationAuthenticationFind;
