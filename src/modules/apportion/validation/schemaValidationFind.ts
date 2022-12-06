import * as yup from 'yup';

import schemaParamIdApportion from './schemaParamIdApportion';

const schemaValidationApportionFind = yup.object().shape({
  params: schemaParamIdApportion,
});

export default schemaValidationApportionFind;
