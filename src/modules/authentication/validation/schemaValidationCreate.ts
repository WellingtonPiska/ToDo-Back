import * as yup from 'yup';

import schemaBodyAuthentication from './schemaBodyAuthentication';

const schemaValidationAuthenticationCreate = yup.object().shape({
  body: schemaBodyAuthentication,
});

export default schemaValidationAuthenticationCreate;
