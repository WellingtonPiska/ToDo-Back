import * as yup from 'yup';
import schemaBodyProfile from './schemaBodyProfile';

const schemaValidationProfileCreate = yup.object().shape({
  body: schemaBodyProfile
});



export default schemaValidationProfileCreate;


