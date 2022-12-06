import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyDeviceType = yup.object().shape({
  name: yup.string().required('Campo necessário'),
  cost: yup.string().required('Campo necessário'),
  status: yup
    .string()
    .required('Campo necessário')
    .matches(regexUuidV4, 'UUID inválido '),
});

export default schemaBodyDeviceType;
