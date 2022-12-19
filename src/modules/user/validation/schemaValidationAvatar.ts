import * as yup from 'yup';

import schemaParamIdUser from './schemaParamIdUser';

const schemaValidationUserAvatar = yup.object().shape({
  params: schemaParamIdUser,
});

export default schemaValidationUserAvatar;
