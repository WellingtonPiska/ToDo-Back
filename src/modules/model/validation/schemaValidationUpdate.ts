import * as yup from 'yup';

import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyModel from './schemaBodyModel';

const schemaValidationModelUpdate = yup.object().shape({
  body: schemaBodyModel,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationModelUpdate;
