import * as yup from 'yup';

import schemaBodyEditMenuStatus from './schemaBodyEditMenuStatus';
import schemaParamIdMenu from './schemaParamIdMenu';

const schemaValidationEditMenuStatus = yup.object().shape({
  params: schemaParamIdMenu,
  body: schemaBodyEditMenuStatus,
});

export default schemaValidationEditMenuStatus;
