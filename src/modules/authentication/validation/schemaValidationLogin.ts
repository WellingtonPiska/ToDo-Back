import * as yup from 'yup';

import schemaBodyLogin from './schemaBodyLogin';

const schemaValidationAuthenticationLogin = yup.object().shape({
  body: schemaBodyLogin,
});

export default schemaValidationAuthenticationLogin;
