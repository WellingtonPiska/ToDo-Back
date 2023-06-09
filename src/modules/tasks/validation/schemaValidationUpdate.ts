import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyTasks from './schemaBodyTasks';

const schemaValidationTasksUpdate = yup.object().shape({
  body: schemaBodyTasks,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationTasksUpdate;
