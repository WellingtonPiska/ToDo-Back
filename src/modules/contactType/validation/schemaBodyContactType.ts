import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyContactType = yup.object().shape({
  name: yup.string().required('Campo necessário'),
  status: yup
    .string()
    .required('Campo necessário')
    .matches(regexUuidV4, 'UUID inválido '),
});

export default schemaBodyContactType;
