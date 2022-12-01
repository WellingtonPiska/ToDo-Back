import * as yup from 'yup';
import schemaParamIdDeviceType from './schemaParamIdDeviceType';


const schemaValidationDeviceTypeFind = yup.object().shape({
  params: schemaParamIdDeviceType,
});


export default schemaValidationDeviceTypeFind;
