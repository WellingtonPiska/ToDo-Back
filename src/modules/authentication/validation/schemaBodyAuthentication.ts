import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyAuthentication = yup.object().shape({
  token: yup.string().required('Token is required'),
  user: yup
    .string()
    .required('User is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyAuthentication;
