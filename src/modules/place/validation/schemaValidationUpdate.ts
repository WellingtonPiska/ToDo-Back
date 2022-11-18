import * as yup from 'yup';
import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyPlace from './schemaBodyPlace';

const schemaValidationPlaceUpdate = yup.object().shape({
  body: schemaBodyPlace,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationPlaceUpdate;
