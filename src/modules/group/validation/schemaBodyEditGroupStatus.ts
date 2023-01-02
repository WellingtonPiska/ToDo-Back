import * as yup from 'yup';

const schemaBodyEditGroupStatus = yup.object().shape({
  ref: yup.string().required('Ref is required'),
});

export default schemaBodyEditGroupStatus;
