import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyProject = yup.object().shape({
  name: yup.string().required('Campo necessário!'),
  description: yup.string().required('Campo necessário!'),
  responsible: yup
    .string()
    .required('Id is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyProject;
