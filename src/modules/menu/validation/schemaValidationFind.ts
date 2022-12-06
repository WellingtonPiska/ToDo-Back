import * as yup from 'yup';

import schemaParamIdMenu from './schemaParamIdMenu';

const schemaValidationMenuFind = yup.object().shape({
  params: schemaParamIdMenu,
});

export default schemaValidationMenuFind;
