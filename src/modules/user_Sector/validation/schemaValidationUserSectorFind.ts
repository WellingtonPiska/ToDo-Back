import * as yup from 'yup';

import schemaParamIdUserSector from './schemaParamIdUserSector';

const schemaValidationUserSectorFind = yup.object().shape({
  params: schemaParamIdUserSector,
});

export default schemaValidationUserSectorFind;
