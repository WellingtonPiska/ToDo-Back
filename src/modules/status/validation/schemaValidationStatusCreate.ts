import * as yup from 'yup';

import schemaBodyStatus from './schemaBodyStatus';

const schemaValidationStatusCreate = yup.object().shape({
  body: schemaBodyStatus,
});

export default schemaValidationStatusCreate;
