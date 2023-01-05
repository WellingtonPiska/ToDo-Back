import * as yup from 'yup';

import schemaBodyTasks from './schemaBodyTasks';

const schemaValidationTasksCreate = yup.object().shape({
  body: schemaBodyTasks,
});

export default schemaValidationTasksCreate;
