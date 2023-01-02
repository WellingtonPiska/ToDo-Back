import * as yup from 'yup';

import schemaBodyEditCostCenterStatus from './schemaBodyEditCostCenterStatus';
import schemaParamIdCostCenter from './schemaParamIdCostCenter';

const schemaValidationEditCostCenterStatus = yup.object().shape({
  params: schemaParamIdCostCenter,
  body: schemaBodyEditCostCenterStatus,
});

export default schemaValidationEditCostCenterStatus;
