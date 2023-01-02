import * as yup from 'yup';

import schemaBodyEditCompanyStatus from './schemaBodyEditCompanyStatus';
import schemaParamIdCompany from './schemaParamIdCompany';

const schemaValidationEditCompanyStatus = yup.object().shape({
  params: schemaParamIdCompany,
  body: schemaBodyEditCompanyStatus,
});

export default schemaValidationEditCompanyStatus;
