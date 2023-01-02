import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';

const schemaBodyApportion = yup.object().shape({
  value: yup.string().required('Valor é necessário'),
  costCenter: yup.string().notRequired().matches(regexUuidV4, 'UUID Inválido'),
  apportion: yup.string().notRequired().matches(regexUuidV4, 'UUID Inválido'),
});

export default schemaBodyApportion;
