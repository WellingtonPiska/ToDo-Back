import * as yup from 'yup';

import schemaParamIdSections from './schemaParamIdSections';

const schemaValidationSectionsFind = yup.object().shape({
  params: schemaParamIdSections,
});

export default schemaValidationSectionsFind;
