import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyUser = yup.object().shape({
  dateStart: yup.string().required('Campo necessário!'),
  dateEnd: yup.string().required('Campo necessário!'),
  tasks: yup
    .string()
    .required('Id is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  project: yup
    .string()
    .required('Id is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  user: yup
    .string()
    .required('Id is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyUser;
