import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyProject from './schemaBodyProject';

const schemaValidationProjectUpdate = yup.object().shape({
  body: schemaBodyProject,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationProjectUpdate;
