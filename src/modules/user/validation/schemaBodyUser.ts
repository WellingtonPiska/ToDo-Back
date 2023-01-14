import * as yup from 'yup';

const schemaBodyUser = yup.object().shape({
  login: yup.string().required('Campo necessário!'),
  name: yup.string().required('Campo necessário!'),
  lastName: yup.string().required('Campo necessário!'),
  mail: yup.string().required('Campo necessário!'),
});

export default schemaBodyUser;
