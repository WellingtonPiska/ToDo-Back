import * as yup from 'yup';

import schemaBodyAuth from './schemaBodyAuth';

const schemaValidationLogin = yup.object().shape({
  body: schemaBodyAuth,
});

export default schemaValidationLogin;
