import * as yup from 'yup';

import schemaBodyGroup from './schemaBodyGroup';

const schemaValidationGroupCreate = yup.object().shape({
  body: schemaBodyGroup,
});

export default schemaValidationGroupCreate;
