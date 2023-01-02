import * as yup from 'yup';

import schemaBodyEditSectorStatus from './schemaBodyEditSectorStatus';
import schemaParamIdSector from './schemaParamIdSector';

const schemaValidationEditSectorStatus = yup.object().shape({
  params: schemaParamIdSector,
  body: schemaBodyEditSectorStatus,
});

export default schemaValidationEditSectorStatus;
