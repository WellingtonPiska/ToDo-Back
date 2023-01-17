import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyListTasks = yup.object().shape({
  project: yup
    .string()
    .required('Campo necessário!')
    .matches(regexUuidV4, 'Invalid UUID'),
  sections: yup
    .string()
    .required('Campo necessário!')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyListTasks;
