import * as yup from 'yup';

const schemaBodyEditMenuStatus = yup.object().shape({
  ref: yup.string().required('Ref is required'),
});

export default schemaBodyEditMenuStatus;
