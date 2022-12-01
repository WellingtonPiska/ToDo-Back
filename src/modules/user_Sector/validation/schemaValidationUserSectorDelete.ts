import * as yup from 'yup';
import schemaParamIdUserSector from './schemaParamIdUserSector';

const schemaValidationUserSectorDelete = yup.object().shape({
  params: schemaParamIdUserSector,
});



export default schemaValidationUserSectorDelete;
