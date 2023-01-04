import * as yup from 'yup';

import schemaBodyProject from './schemaBodyProject';

const schemaValidationProjectCreate = yup.object().shape({
  body: schemaBodyProject,
});

export default schemaValidationProjectCreate;
