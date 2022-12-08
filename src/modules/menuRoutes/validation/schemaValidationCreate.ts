import * as yup from 'yup';

import schemaBodyMenuRoutes from './schemaBodyMenuRoutes';

const schemaValidationMenuRoutesCreate = yup.object().shape({
  body: schemaBodyMenuRoutes,
});

export default schemaValidationMenuRoutesCreate;
