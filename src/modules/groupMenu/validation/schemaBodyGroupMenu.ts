import * as yup from 'yup';

const schemaBodyGroupMenu = yup.object().shape({
  name: yup.string().required('Name is required'),
  description: yup.string().required('description is required'),
});

export default schemaBodyGroupMenu;
