import * as yup from 'yup';

import schemaBodyContactType from './schemaBodyContactType';

const schemaValidationContactTypeCreate = yup.object().shape({
  body: schemaBodyContactType,
});

export default schemaValidationContactTypeCreate;
