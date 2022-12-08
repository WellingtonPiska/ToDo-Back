import * as yup from 'yup';

import schemaParamIdProfileMenu from './schemaParamIdProfileMenu';

const schemaValidationProfileMenuDelete = yup.object().shape({
  params: schemaParamIdProfileMenu,
});

export default schemaValidationProfileMenuDelete;
