import * as yup from 'yup';

import schemaBodySector from './schemaBodySector';

const schemaValidationSectorCreate = yup.object().shape({
  body: schemaBodySector,
});

export default schemaValidationSectorCreate;
