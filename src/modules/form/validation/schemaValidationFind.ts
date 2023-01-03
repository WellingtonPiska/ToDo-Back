import * as yup from 'yup';

import schemaParamIdForm from './schemaParamIdForm';

const schemaValidationFormFind = yup.object().shape({
  params: schemaParamIdForm,
});

export default schemaValidationFormFind;
