import * as yup from 'yup';
import schemaBodyDeviceType from './schemaBodyDeviceType';

const schemaValidationDeviceTypeCreate = yup.object().shape({
  body: schemaBodyDeviceType
});



export default schemaValidationDeviceTypeCreate;


