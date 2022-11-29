import * as yup from 'yup';
import schemaParamIdCompany from './schemaParamIdCompany';



const schemaValidationCompanyDelete = yup.object().shape({
  params: schemaParamIdCompany,
});



export default schemaValidationCompanyDelete;
