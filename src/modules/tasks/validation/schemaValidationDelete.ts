import * as yup from 'yup';

import schemaParamIdTasks from './schemaParamId';

const schemaValidationTasksDelete = yup.object().shape({
  params: schemaParamIdTasks,
});

export default schemaValidationTasksDelete;
