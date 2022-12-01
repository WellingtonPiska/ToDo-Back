import * as yup from 'yup';
import regexUuidV4 from '../../../shared/utils/regexUuidV4';
import schemaBodyUserSector from './schemaBodyUserSector';

const schemaValidationUserSectorUpdate = yup.object().shape({
  body: schemaBodyUserSector,
  params: yup.object({
    id: yup
      .string()
      .required('Id is required')
      .matches(regexUuidV4, 'Invalid UUID'),
  }),
});

export default schemaValidationUserSectorUpdate;
