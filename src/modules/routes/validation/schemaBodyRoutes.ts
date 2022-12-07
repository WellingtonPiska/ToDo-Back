import * as yup from 'yup';

const schemaBodyRoutes = yup.object().shape({
  description: yup.string().required('Description is required'),
  uri: yup.string().required('uri is required'),
  method: yup.string().required('method is required'),
});

export default schemaBodyRoutes;
