import * as yup from 'yup';

const schemaBodyEditUserStatus = yup.object().shape({
  ref: yup.string().required('Ref is required'),
});

export default schemaBodyEditUserStatus;
