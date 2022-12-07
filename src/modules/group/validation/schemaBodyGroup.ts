import * as yup from 'yup';

const schemaBodyGroup = yup.object().shape({
  name: yup.string().required('Name is required'),
  type: yup
    .string()
    .required('Type is required')
    .max(1, 'Type requires 1 character'),
  dn: yup.string().required('dn is required'),
  sid: yup.string().required('sid is required'),
  sync: yup.string().required('sync is required'),
  mail: yup.string().notRequired(),
});

export default schemaBodyGroup;
