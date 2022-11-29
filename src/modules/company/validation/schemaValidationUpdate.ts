import * as yup from 'yup';
import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyCompany from './schemaBodyCompany';

const schemaValidationCompanyUpdate = yup.object().shape({
  body: schemaBodyCompany,
  params: yup.object({
    id: yup
      .string()
      .required('Id é necessário')
      .matches(regexUuidV4, 'UUID inválido'),
  }),
});

export default schemaValidationCompanyUpdate;
