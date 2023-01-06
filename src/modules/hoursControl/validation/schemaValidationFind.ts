import * as yup from 'yup';

import schemaParamIdHoursControl from './schemaParamIdHoursControl';

const schemaValidationHoursControlFind = yup.object().shape({
  params: schemaParamIdHoursControl,
});

export default schemaValidationHoursControlFind;
