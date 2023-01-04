import * as yup from 'yup';

import schemaParamIdProject from './schemaParamIdProject';

const schemaValidationProjectFind = yup.object().shape({
  params: schemaParamIdProject,
});

export default schemaValidationProjectFind;
