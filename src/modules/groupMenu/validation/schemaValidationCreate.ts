import * as yup from 'yup';

import schemaBodyGroupMenu from './schemaBodyGroupMenu';

const schemaValidationGroupMenuCreate = yup.object().shape({
  body: schemaBodyGroupMenu,
});

export default schemaValidationGroupMenuCreate;
