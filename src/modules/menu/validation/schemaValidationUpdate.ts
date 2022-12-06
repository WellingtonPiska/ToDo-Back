import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyMenu from './schemaBodyMenu';

const schemaValidationMenuUpdate = yup.object().shape({
  body: schemaBodyMenu,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationMenuUpdate;
