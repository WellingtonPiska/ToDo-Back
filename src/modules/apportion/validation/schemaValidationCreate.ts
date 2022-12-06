import * as yup from 'yup';

import schemaBodyApportion from './schemaBodyApportion';

const schemaValidationApportionCreate = yup.object().shape({
  body: schemaBodyApportion,
});

export default schemaValidationApportionCreate;
