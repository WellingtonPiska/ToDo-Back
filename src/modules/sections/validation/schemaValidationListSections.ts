import * as yup from 'yup';

import schemaParamIdListSections from './schemaParamIdListSections';

const schemaValidationListSections = yup.object().shape({
  params: schemaParamIdListSections,
});

export default schemaValidationListSections;
