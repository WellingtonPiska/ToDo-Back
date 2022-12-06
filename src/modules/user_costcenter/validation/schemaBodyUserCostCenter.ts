import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyUserCostCenter = yup.object().shape({
  user: yup
    .string()
    .required('Id status is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  costCenter: yup
    .string()
    .required('Id profile is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyUserCostCenter;
