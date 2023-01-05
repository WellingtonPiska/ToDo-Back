import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodySections from './schemaBodySections';

const schemaValidationSectionsUpdate = yup.object().shape({
  body: schemaBodySections,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationSectionsUpdate;
