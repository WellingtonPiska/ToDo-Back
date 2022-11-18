import * as yup from 'yup';
import schemaBodyCostCenter from './schemaBodyCostCenter';

const schemaValidationCostCenterCreate = yup.object().shape({
  body: schemaBodyCostCenter
});



export default schemaValidationCostCenterCreate;


