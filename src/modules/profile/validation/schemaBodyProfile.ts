import * as yup from 'yup';

const schemaBodyProfile = yup.object().shape({
  name: yup.string().required('Name is required'),
});

export default schemaBodyProfile;
