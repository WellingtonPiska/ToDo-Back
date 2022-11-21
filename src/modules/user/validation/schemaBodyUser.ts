import * as yup from 'yup';
import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyUser = yup.object().shape({
  name: yup.string().required('Name is required'),
  lastName: yup.string().required('Lastname is required'),
  display: yup.string().required('Display is required'),
  login: yup.string().required('Login is required'),
  password: yup.string().notRequired(),
  cpf: yup.string().notRequired(),
  mail: yup.string().notRequired(),
  dn: yup.string().notRequired(),
  sid: yup.string().notRequired(),

  status: yup
    .string()
    .required('Id status is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  profile: yup
    .string()
    .required('Id profile is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  sector: yup
    .string()
    .required('Id sector is required')
    .matches(regexUuidV4, 'Invalid UUID'),
  costcenter: yup
    .string()
    .notRequired()
    .matches(regexUuidV4, 'Invalid UUID')
});

export default schemaBodyUser;
