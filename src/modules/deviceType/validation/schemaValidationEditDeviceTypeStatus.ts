import * as yup from 'yup';

import schemaBodyEditDeviceTypeStatus from './schemaBodyEditDeviceTypeStatus';
import schemaParamIdDeviceType from './schemaParamIdDeviceType';

const schemaValidationEditDeviceTypeStatus = yup.object().shape({
  params: schemaParamIdDeviceType,
  body: schemaBodyEditDeviceTypeStatus,
});

export default schemaValidationEditDeviceTypeStatus;
