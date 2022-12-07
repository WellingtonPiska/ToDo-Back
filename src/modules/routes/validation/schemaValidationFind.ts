import * as yup from 'yup';

import schemaParamIdRoutes from './schemaParamIdRoutes';

const schemaValidationRoutesFind = yup.object().shape({
  params: schemaParamIdRoutes,
});

export default schemaValidationRoutesFind;
