import * as yup from 'yup';

const schemaBodyAuth = yup.object().shape({
  login: yup.string().required('Login is required'),
  password: yup.string().required('Password is required'),
});

export default schemaBodyAuth;
