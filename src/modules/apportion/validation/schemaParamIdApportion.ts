import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaParamIdApportion = yup.object({
  id: yup
    .string()
    .required('Id é necessário')
    .matches(regexUuidV4, 'UUID Inválido'),
});

export default schemaParamIdApportion;
