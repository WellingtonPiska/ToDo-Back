import * as yup from 'yup';

import schemaBodyHoursControl from './schemaBodyHoursControl';

const schemaValidationHoursControlCreate = yup.object().shape({
  body: schemaBodyHoursControl,
});

export default schemaValidationHoursControlCreate;
