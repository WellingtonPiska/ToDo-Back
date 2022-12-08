import * as yup from 'yup';

import schemaParamIdMenuRoutes from './schemaParamIdMenuRoutes';

const schemaValidationMenuRoutesFind = yup.object().shape({
  params: schemaParamIdMenuRoutes,
});

export default schemaValidationMenuRoutesFind;
