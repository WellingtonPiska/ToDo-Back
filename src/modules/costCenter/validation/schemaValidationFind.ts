import * as yup from 'yup';
import schemaParamIdCostCenter from './schemaParamIdCostCenter';


const schemaValidationCostCenterFind = yup.object().shape({
  params: schemaParamIdCostCenter,
});


export default schemaValidationCostCenterFind;
