import * as yup from 'yup';

import schemaBodyEditProfileStatus from './schemaBodyEditProfileStatus';
import schemaParamIdProfile from './schemaParamIdProfile';

const schemaValidationEditProfileStatus = yup.object().shape({
  params: schemaParamIdProfile,
  body: schemaBodyEditProfileStatus,
});

export default schemaValidationEditProfileStatus;
