import * as yup from 'yup';
import schemaParamIdList from './schemaParamIdList';

const schemaValidationCompanyContactList = yup.object().shape({
  params: schemaParamIdList,
});

export default schemaValidationCompanyContactList;
