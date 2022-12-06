import * as yup from 'yup';

import schemaBodyModel from './schemaBodyModel';

const schemaValidationModelCreate = yup.object().shape({
  body: schemaBodyModel,
});

export default schemaValidationModelCreate;
