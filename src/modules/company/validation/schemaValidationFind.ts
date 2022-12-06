import * as yup from 'yup';

import schemaParamIdCompany from './schemaParamIdCompany';

const schemaValidationCompanyFind = yup.object().shape({
  params: schemaParamIdCompany,
});

export default schemaValidationCompanyFind;
