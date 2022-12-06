import * as yup from 'yup';

import schemaBodyUserSector from './schemaBodyUserSector';

const schemaValidationUserSectorCreate = yup.object().shape({
  body: schemaBodyUserSector,
});

export default schemaValidationUserSectorCreate;
