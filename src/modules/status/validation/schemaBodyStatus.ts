import * as yup from 'yup';

const schemaBodyStatus = yup.object().shape({
  name: yup.string().required('Name is required'),
  reference: yup
    .string()
    .required('Reference is required')
    .max(1, 'Reference requires 1 character'),
  color: yup.string().required('Color is required'),
});

export default schemaBodyStatus;
