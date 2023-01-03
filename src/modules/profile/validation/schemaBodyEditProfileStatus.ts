import * as yup from 'yup';

const schemaBodyEditProfileStatus = yup.object().shape({
  ref: yup.string().required('Ref is required'),
});

export default schemaBodyEditProfileStatus;
