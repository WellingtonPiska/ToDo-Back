import * as yup from 'yup';

import schemaBodyEditGroupStatus from './schemaBodyEditGroupStatus';
import schemaParamIdGroup from './schemaParamIdGroup';

const schemaValidationEditGroupStatus = yup.object().shape({
  params: schemaParamIdGroup,
  body: schemaBodyEditGroupStatus,
});

export default schemaValidationEditGroupStatus;
