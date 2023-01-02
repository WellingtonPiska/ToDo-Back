import * as yup from 'yup';

const schemaBodyEditCompanyStatus = yup.object().shape({
  ref: yup.string().required('Ref is required'),
});

export default schemaBodyEditCompanyStatus;
