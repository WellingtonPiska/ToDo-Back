import * as yup from 'yup';

import schemaBodySections from './schemaBodySections';

const schemaValidationSectionsCreate = yup.object().shape({
  body: schemaBodySections,
});

export default schemaValidationSectionsCreate;
