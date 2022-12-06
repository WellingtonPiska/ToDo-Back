import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyApportion from './schemaBodyApportion';

const schemaValidationApportionUpdate = yup.object().shape({
  body: schemaBodyApportion,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationApportionUpdate;
