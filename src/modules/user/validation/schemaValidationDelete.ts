import * as yup from 'yup';

import schemaParamIdUser from './schemaParamIdUser';

const schemaValidationUserDelete = yup.object().shape({
  params: schemaParamIdUser,
});

export default schemaValidationUserDelete;
