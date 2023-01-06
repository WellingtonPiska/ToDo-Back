import * as yup from 'yup';

import schemaParamIdHoursControl from './schemaParamIdHoursControl';

const schemaValidationHoursControlDelete = yup.object().shape({
  params: schemaParamIdHoursControl,
});

export default schemaValidationHoursControlDelete;
