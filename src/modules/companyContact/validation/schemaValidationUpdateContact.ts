import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyCompanyContact from './schemaBodyCompanyContact';

const schemaValidationCompanyContactUpdate = yup.object().shape({
  body: schemaBodyCompanyContact,
  params: yup.object({
    id: yup
      .string()
      .required('Id é necessário')
      .matches(regexUuidV4, 'UUID inválido'),

    company: yup
      .string()
      .required('Company é necessário')
      .matches(regexUuidV4, 'UUID inválido'),
  }),
});

export default schemaValidationCompanyContactUpdate;
