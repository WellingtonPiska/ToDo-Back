import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyCostCenter from './schemaBodyCostCenter';

const schemaValidationCostCenterUpdate = yup.object().shape({
  body: schemaBodyCostCenter,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationCostCenterUpdate;
