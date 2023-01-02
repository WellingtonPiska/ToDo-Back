import * as yup from 'yup';

import schemaBodyEditUserStatus from './schemaBodyEditUserStatus';
import schemaParamIdUser from './schemaParamIdUser';

const schemaValidationEditUserStatus = yup.object().shape({
  params: schemaParamIdUser,
  body: schemaBodyEditUserStatus,
});

export default schemaValidationEditUserStatus;
