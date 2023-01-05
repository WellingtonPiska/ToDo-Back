import * as yup from 'yup';

import schemaParamIdTasks from './schemaParamId';

const schemaValidationTasksFind = yup.object().shape({
  params: schemaParamIdTasks,
});

export default schemaValidationTasksFind;
