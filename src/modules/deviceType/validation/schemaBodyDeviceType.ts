import * as yup from 'yup';

const schemaBodyDeviceType = yup.object().shape({
  name: yup.string().required('Campo necessário'),
});

export default schemaBodyDeviceType;
