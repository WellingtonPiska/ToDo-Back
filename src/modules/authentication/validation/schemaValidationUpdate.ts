import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyAuthentication from './schemaBodyAuthentication';

const schemaValidationAuthenticationUpdate = yup.object().shape({
  body: schemaBodyAuthentication,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationAuthenticationUpdate;
