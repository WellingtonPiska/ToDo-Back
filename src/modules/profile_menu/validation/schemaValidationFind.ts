import * as yup from 'yup';

import schemaParamIdProfileMenu from './schemaParamIdProfileMenu';

const schemaValidationProfileMenuFind = yup.object().shape({
  params: schemaParamIdProfileMenu,
});

export default schemaValidationProfileMenuFind;
