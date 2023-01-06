import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyHoursControl from './schemaBodyHoursControl';

const schemaValidationHoursControlUpdate = yup.object().shape({
  body: schemaBodyHoursControl,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationHoursControlUpdate;
