import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyGroup = yup.object().shape({
  name: yup.string().required('Name is required'),
  type: yup
    .string()
    .required('Type is required')
    .max(1, 'Type requires 1 character'),
  dn: yup.string().required('dn is required'),
  sid: yup.string().required('sid is required'),
  sync: yup.string().required('sync is required'),
  mail: yup.string().notRequired(),
  status: yup
    .string()
    .required('Id status is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyGroup;
