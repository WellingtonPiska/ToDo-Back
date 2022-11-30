import * as yup from 'yup';
import schemaBodyCompanyContact from './schemaBodyCompanyContact';
import schemaParamIdList from './schemaParamIdList';

const schemaValidationCompanyContactCreate = yup.object().shape({
  body: schemaBodyCompanyContact,
  params: schemaParamIdList
});

export default schemaValidationCompanyContactCreate;


