import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyGroupMenu from './schemaBodyGroupMenu';

const schemaValidationGroupMenuUpdate = yup.object().shape({
  body: schemaBodyGroupMenu,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationGroupMenuUpdate;
