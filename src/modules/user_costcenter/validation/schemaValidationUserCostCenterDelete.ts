import * as yup from 'yup';

import schemaParamIdUserCostCenter from './schemaParamIdUserCostCenter';

const schemaValidationUserCostCenterDelete = yup.object().shape({
  params: schemaParamIdUserCostCenter,
});

export default schemaValidationUserCostCenterDelete;
