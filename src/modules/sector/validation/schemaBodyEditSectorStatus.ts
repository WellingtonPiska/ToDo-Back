import * as yup from 'yup';

const schemaBodyEditSectorStatus = yup.object().shape({
  ref: yup.string().required('Ref is required'),
});

export default schemaBodyEditSectorStatus;
