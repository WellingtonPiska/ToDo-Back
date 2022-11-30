import * as yup from 'yup';
import schemaParamCompanyContact from './schemaParamCompanyContact';

const schemaValidationCompanyFindContact = yup.object().shape({
  params: schemaParamCompanyContact,
});

export default schemaValidationCompanyFindContact;
