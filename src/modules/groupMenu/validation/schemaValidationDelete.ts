import * as yup from 'yup';

import schemaParamIdGroupMenu from './schemaParamIdGroupMenu';

const schemaValidationGroupMenuDelete = yup.object().shape({
  params: schemaParamIdGroupMenu,
});

export default schemaValidationGroupMenuDelete;
