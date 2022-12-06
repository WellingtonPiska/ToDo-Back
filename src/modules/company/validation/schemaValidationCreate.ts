import * as yup from 'yup';

import schemaBodyCompany from './schemaBodyCompany';

const schemaValidationCompanyCreate = yup.object().shape({
  body: schemaBodyCompany,
});

export default schemaValidationCompanyCreate;
