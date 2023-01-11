import * as yup from 'yup';

const schemaBodyAuthenticationLogin = yup.object().shape({
  body: yup.object().shape({
    login: yup.string().required('Login is required'),
    password: yup.string().required('Password is required'),
  }),
});

export default schemaBodyAuthenticationLogin;
