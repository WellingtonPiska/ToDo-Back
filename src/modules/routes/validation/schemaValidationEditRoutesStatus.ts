import * as yup from 'yup';

import schemaBodyEditRoutesStatus from './schemaBodyEditRoutesStatus';
import schemaParamIdRoutes from './schemaParamIdRoutes';

const schemaValidationEditRoutesStatus = yup.object().shape({
  params: schemaParamIdRoutes,
  body: schemaBodyEditRoutesStatus,
});

export default schemaValidationEditRoutesStatus;
