import * as yup from 'yup';

const schemaBodyProject = yup.object().shape({
  name: yup.string().required('Campo necessário!'),
  description: yup.string().required('Campo necessário!'),
  user: yup.string().required('Campo necessário!'),
});

export default schemaBodyProject;
