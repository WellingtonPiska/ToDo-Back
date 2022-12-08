import * as yup from 'yup';

import schemaParamIdMenuRoutes from './schemaParamIdMenuRoutes';

const schemaValidationMenuRoutesDelete = yup.object().shape({
  params: schemaParamIdMenuRoutes,
});

export default schemaValidationMenuRoutesDelete;
