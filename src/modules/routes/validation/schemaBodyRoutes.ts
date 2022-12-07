import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyRoutes = yup.object().shape({
  description: yup.string().required('Description is required'),
  uri: yup.string().required('uri is required'),
  method: yup.string().required('method is required'),
  status: yup
    .string()
    .required('Id status is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyRoutes;
