import * as yup from 'yup';
import schemaParamIdUserCostCenter from './schemaParamIdUserCostCenter';

const schemaValidationUserCostCenterFind = yup.object().shape({
  params: schemaParamIdUserCostCenter,
});


export default schemaValidationUserCostCenterFind;
