import * as yup from 'yup';

import schemaParamIdMenu from './schemaParamIdMenu';

const schemaValidationMenuDelete = yup.object().shape({
  params: schemaParamIdMenu,
});

export default schemaValidationMenuDelete;
