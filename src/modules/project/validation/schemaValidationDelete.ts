import * as yup from 'yup';

import schemaParamIdProject from './schemaParamIdProject';

const schemaValidationProjectDelete = yup.object().shape({
  params: schemaParamIdProject,
});

export default schemaValidationProjectDelete;
