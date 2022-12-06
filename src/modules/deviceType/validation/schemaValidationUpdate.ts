import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyDeviceType from './schemaBodyDeviceType';

const schemaValidationDeviceTypeUpdate = yup.object().shape({
  body: schemaBodyDeviceType,
  params: yup.object({
    id: yup
      .string()
      .required('Id é necessário')
      .matches(regexUuidV4, 'UUID inválido'),
  }),
});

export default schemaValidationDeviceTypeUpdate;
