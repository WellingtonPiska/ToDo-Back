import * as yup from 'yup';

const schemaBodyEditRoutesStatus = yup.object().shape({
  ref: yup.string().required('Ref is required'),
});

export default schemaBodyEditRoutesStatus;
