import * as yup from 'yup';

import schemaBodyRoutes from './schemaBodyRoutes';

const schemaValidationRoutesCreate = yup.object().shape({
  body: schemaBodyRoutes,
});

export default schemaValidationRoutesCreate;
