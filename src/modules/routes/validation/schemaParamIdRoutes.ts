import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaParamIdRoutes = yup.object({
  id: yup
    .string()
    .required('Id is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaParamIdRoutes;
