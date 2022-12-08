import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyMenuRoutes = yup.object().shape({
  menu: yup
    .string()
    .required('Id status is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  routes: yup
    .string()
    .required('Id profile is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyMenuRoutes;
