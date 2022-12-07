import * as yup from 'yup';

import schemaParamIdGroupMenu from './schemaParamIdGroupMenu';

const schemaValidationGroupMenuFind = yup.object().shape({
  params: schemaParamIdGroupMenu,
});

export default schemaValidationGroupMenuFind;
