import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyProfileMenu from './schemaBodyProfileMenu';

const schemaValidationProfileMenuUpdate = yup.object().shape({
  body: schemaBodyProfileMenu,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationProfileMenuUpdate;
