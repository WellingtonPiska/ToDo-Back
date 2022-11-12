import * as yup from 'yup';
import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyStatus from './schemaBodyStatus';

const schemaValidationStatusUpdate = yup.object().shape({
  body: schemaBodyStatus,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationStatusUpdate;
