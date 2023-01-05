import * as yup from 'yup';

import schemaParamIdSections from './schemaParamIdSections';

const schemaValidationSectionsDelete = yup.object().shape({
  params: schemaParamIdSections,
});

export default schemaValidationSectionsDelete;
