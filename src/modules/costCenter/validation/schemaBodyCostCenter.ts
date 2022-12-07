import * as yup from 'yup';

const schemaBodyCostCenter = yup.object().shape({
  name: yup.string().required('Name is required'),
  apportion: yup
    .string()
    .required('Apportionment is required')
    .max(1, 'Apportionment requires 1 character'),
  obs: yup.string().required('obs is required'),
});

export default schemaBodyCostCenter;
