import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyPlace = yup.object().shape({
  name: yup.string().required('Name is required'),
  type: yup
    .string()
    .required('Apportionment is required')
    .max(1, 'Apportionment requires 1 character'),
  obs: yup.string().required('obs is required'),
  status: yup
    .string()
    .required('Id status is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  costCenter: yup
    .string()
    .required('Id costCenter is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyPlace;
