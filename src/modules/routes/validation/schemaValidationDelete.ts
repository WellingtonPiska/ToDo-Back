import * as yup from 'yup';

import schemaParamIdRoutes from './schemaParamIdRoutes';

const schemaValidationRoutesDelete = yup.object().shape({
  params: schemaParamIdRoutes,
});

export default schemaValidationRoutesDelete;
