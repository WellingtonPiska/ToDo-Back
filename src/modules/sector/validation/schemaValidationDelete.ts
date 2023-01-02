import * as yup from 'yup';

import schemaParamIdSector from './schemaParamIdSector';

const schemaValidationSectorDelete = yup.object().shape({
  params: schemaParamIdSector,
});

export default schemaValidationSectorDelete;
