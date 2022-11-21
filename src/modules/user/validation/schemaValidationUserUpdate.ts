import * as yup from 'yup';
import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyUser from './schemaBodyUser';

const schemaValidationUserUpdate = yup.object().shape({
  body: schemaBodyUser,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationUserUpdate;
