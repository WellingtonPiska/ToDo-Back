import * as yup from 'yup';

import schemaParamIdApportion from './schemaParamIdApportion';

const schemaValidationApportionDelete = yup.object().shape({
  params: schemaParamIdApportion,
});

export default schemaValidationApportionDelete;
