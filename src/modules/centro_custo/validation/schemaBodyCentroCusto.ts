
import * as yup from 'yup';
import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyCentroCusto = yup.object().shape({
  nome: yup.string().required('Name is required'),
  rateio: yup
    .string()
    .required('Reference is required')
    .max(1, 'Reference requires 1 character'),
  obs: yup.string().required('Color is required'),
  status: yup
    .string()
    .required('Id status is required')
    .matches(regexUuidV4, 'Invalid UUID'),
});

export default schemaBodyCentroCusto;
