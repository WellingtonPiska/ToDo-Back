import * as yup from 'yup';

const schemaBodyContactType = yup.object().shape({
  name: yup.string().required('Campo necessário'),
});

export default schemaBodyContactType;
