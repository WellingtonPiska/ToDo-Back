import * as yup from 'yup';

import schemaParamIdCompanyContact from './schemaParamIdCompanyContact';

const schemaValidationCompanyContactFind = yup.object().shape({
  params: schemaParamIdCompanyContact,
});

export default schemaValidationCompanyContactFind;
