import * as yup from 'yup';

const schemaBodyProject = yup.object().shape({
  name: yup.string().required('Campo necessário!'),
  order: yup.number().required('Campo necessário!'),
  color: yup.number().required('Campo necessário!'),
});

export default schemaBodyProject;
