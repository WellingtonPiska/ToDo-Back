import * as yup from 'yup';

const schemaBodyUser = yup.object().shape({
  login: yup.string().required('Campo necessário!'),
  name: yup.string().required('Campo necessário!'),
  lastname: yup.string().required('Campo necessário!'),
  mail: yup.string().required('Campo necessário!'),
  phone: yup.string().notRequired(),
  avatar: yup.string().notRequired(),
  color: yup.string().notRequired(),
});

export default schemaBodyUser;
