import * as yup from 'yup';
import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyProfile from './schemaBodyProfile';

const schemaValidationProfileUpdate = yup.object().shape({
  body: schemaBodyProfile,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationProfileUpdate;
