import * as yup from 'yup';

import schemaParamIdDeviceType from './schemaParamIdDeviceType';

const schemaValidationDeviceTypeDelete = yup.object().shape({
  params: schemaParamIdDeviceType,
});

export default schemaValidationDeviceTypeDelete;
