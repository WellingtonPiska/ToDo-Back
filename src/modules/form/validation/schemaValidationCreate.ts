import * as yup from 'yup';

import schemaBodyForm from './schemaBodyForm';

const schemaValidationFormCreate = yup.object().shape({
  body: schemaBodyForm,
});

export default schemaValidationFormCreate;
