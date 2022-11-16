import * as yup from 'yup';

const schemaBodyStatus = yup.object().shape({
  nome: yup.string().required('Name is required'),
  referencia: yup
    .string()
    .required('Reference is required')
    .max(1, 'Reference requires 1 character'),
  cor: yup.string().required('Color is required'),
});

export default schemaBodyStatus;
