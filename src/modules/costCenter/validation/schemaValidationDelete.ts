import * as yup from 'yup';

import schemaParamIdCostCenter from './schemaParamIdCostCenter';

const schemaValidationCostCenterDelete = yup.object().shape({
  params: schemaParamIdCostCenter,
});

export default schemaValidationCostCenterDelete;
