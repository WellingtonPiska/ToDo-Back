import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyForm from './schemaBodyForm';

const schemaValidationFormUpdate = yup.object().shape({
  body: schemaBodyForm,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationFormUpdate;
