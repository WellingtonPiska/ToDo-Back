import * as yup from 'yup';
import schemaBodyMenu from './schemaBodyMenu';

const schemaValidationMenuCreate = yup.object().shape({
  body: schemaBodyMenu
});



export default schemaValidationMenuCreate;


