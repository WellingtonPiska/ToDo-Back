import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyModel = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().notRequired(),
  status: yup
    .string()
    .required('Id status is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  deviceType: yup
    .string()
    .required('Id DeviceType is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  company: yup
    .string()
    .required('Id company is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyModel;
