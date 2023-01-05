import * as yup from 'yup';

const schemaBodyTasks = yup.object().shape({
  title: yup.string().required('Campo necessário!'),
  project: yup.string().required('Campo necessário!'),
  responsible: yup.string().required('Campo necessário!'),
  sections: yup.string().required('Campo necessário!'),
  priority: yup.string().required('Campo necessário!'),
  percentage: yup.number().required('Campo necessário!'),
  situation: yup.string().required('Campo necessário!'),
  description: yup.string().required('Campo necessário!'),
  order: yup.number().required('Campo necessário!'),
});

export default schemaBodyTasks;
