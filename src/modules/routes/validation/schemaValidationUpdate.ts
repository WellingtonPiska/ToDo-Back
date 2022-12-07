import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyRoutes from './schemaBodyRoutes';

const schemaValidationRoutesUpdate = yup.object().shape({
  body: schemaBodyRoutes,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationRoutesUpdate;
