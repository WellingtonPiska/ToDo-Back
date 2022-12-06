import * as yup from 'yup';

import schemaBodyUserCostCenter from './schemaBodyUserCostCenter';

const schemaValidationUserCostCenterCreate = yup.object().shape({
  body: schemaBodyUserCostCenter,
});

export default schemaValidationUserCostCenterCreate;
