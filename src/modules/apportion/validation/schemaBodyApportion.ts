import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyApportion = yup.object().shape({
  value: yup.string().required('Value is required'),
  costCenter: yup.string().notRequired().matches(regexUuidV4, 'Invalid UUID'),
  apportion: yup.string().notRequired().matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyApportion;
