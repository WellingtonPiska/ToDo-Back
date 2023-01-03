import * as yup from 'yup';

const schemaBodyForm = yup.object().shape({
  title: yup.string().required('Title is required'),
  description: yup.string().required('Description is required'),
});

export default schemaBodyForm;
