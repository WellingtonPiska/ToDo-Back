import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaParamIdContactType = yup.object({
  id: yup
    .string()
    .required('Id é necessário')
    .matches(regexUuidV4, 'UUID inválido'),
});

export default schemaParamIdContactType;
