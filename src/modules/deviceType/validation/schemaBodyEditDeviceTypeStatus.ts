import * as yup from 'yup';

const schemaBodyEditDeviceTypeStatus = yup.object().shape({
  ref: yup.string().required('Ref is required'),
});

export default schemaBodyEditDeviceTypeStatus;
