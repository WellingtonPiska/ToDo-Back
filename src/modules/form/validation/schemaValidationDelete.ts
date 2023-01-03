import * as yup from 'yup';

import schemaParamIdForm from './schemaParamIdForm';

const schemaValidationFormDelete = yup.object().shape({
  params: schemaParamIdForm,
});

export default schemaValidationFormDelete;
