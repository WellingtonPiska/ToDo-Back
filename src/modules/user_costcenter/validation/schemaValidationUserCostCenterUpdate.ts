import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyUserCostCenter from './schemaBodyUserCostCenter';

const schemaValidationUserCostCenterUpdate = yup.object().shape({
  body: schemaBodyUserCostCenter,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationUserCostCenterUpdate;
