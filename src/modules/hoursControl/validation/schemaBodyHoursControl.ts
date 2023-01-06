import * as yup from 'yup';

const schemaBodyUser = yup.object().shape({
  dateStart: yup.string().required('Campo necessário!'),
  dateEnd: yup.string().required('Campo necessário!'),
});

export default schemaBodyUser;
