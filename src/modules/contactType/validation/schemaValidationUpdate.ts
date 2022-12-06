import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyContactType from './schemaBodyContactType';

const schemaValidationContactTypeUpdate = yup.object().shape({
  body: schemaBodyContactType,
  params: yup.object({
    id: yup
      .string()
      .required('Id é necessário')
      .matches(regexUuidV4, 'UUID inválido'),
  }),
});

export default schemaValidationContactTypeUpdate;
