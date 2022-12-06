import * as yup from 'yup';

import schemaBodyUser from './schemaBodyUser';

const schemaValidationUserCreate = yup.object().shape({
  body: schemaBodyUser,
});

export default schemaValidationUserCreate;
