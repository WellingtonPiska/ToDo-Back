import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyGroup from './schemaBodyGroup';

const schemaValidationGroupUpdate = yup.object().shape({
  body: schemaBodyGroup,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationGroupUpdate;
