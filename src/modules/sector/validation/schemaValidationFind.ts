import * as yup from 'yup';

import schemaParamIdSector from './schemaParamIdSector';

const schemaValidationSectorFind = yup.object().shape({
  params: schemaParamIdSector,
});

export default schemaValidationSectorFind;
