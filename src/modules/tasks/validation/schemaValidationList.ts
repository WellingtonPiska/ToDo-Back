import * as yup from 'yup';

import schemaBodyListTasks from './schemaBodyListTasks';

const schemaValidationList = yup.object().shape({
  body: schemaBodyListTasks,
});

export default schemaValidationList;
