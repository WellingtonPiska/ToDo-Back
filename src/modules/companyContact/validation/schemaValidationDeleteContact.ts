import * as yup from 'yup';
import schemaParamIdCompanyContact from './schemaParamIdCompanyContact';



const schemaValidationCompanyContactDelete = yup.object().shape({
  params: schemaParamIdCompanyContact,
});



export default schemaValidationCompanyContactDelete;
