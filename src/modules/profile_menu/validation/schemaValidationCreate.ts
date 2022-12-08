import * as yup from 'yup';

import schemaBodyProfileMenu from './schemaBodyProfileMenu';

const schemaValidationProfileMenuCreate = yup.object().shape({
  body: schemaBodyProfileMenu,
});

export default schemaValidationProfileMenuCreate;
