import * as yup from 'yup';
import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const validParamContactFind = yup.object({
  company: yup
    .string()
    .required('Company é necessário')
    .matches(regexUuidV4, 'Company ID inválido'),
  id: yup
    .string()
    .required('Id é necessário')
    .matches(regexUuidV4, 'UUID inválido'),
});

export default validParamContactFind;
