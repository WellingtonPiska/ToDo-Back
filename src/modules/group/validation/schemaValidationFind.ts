import * as yup from 'yup';

import schemaParamIdGroup from './schemaParamIdGroup';

const schemaValidationGroupFind = yup.object().shape({
  params: schemaParamIdGroup,
});

export default schemaValidationGroupFind;
