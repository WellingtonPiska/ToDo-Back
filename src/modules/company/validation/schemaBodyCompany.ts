import * as yup from 'yup';

const schemaBodyCompany = yup.object().shape({
  name: yup.string().required('Name is required'),
  type: yup
    .string()
    .required('Type is required')
    .max(1, 'Type requires 1 character'),
  inscription: yup.string().required('inscription is required'),
  fantasy: yup.string().required('fantasy is required'),
  zipCode: yup.string().notRequired(),
  street: yup.string().notRequired(),
  complement: yup.string().notRequired(),
  number: yup.string().notRequired(),
  district: yup.string().notRequired(),
  city: yup.string().notRequired(),
  state: yup.string().notRequired(),
});

export default schemaBodyCompany;
