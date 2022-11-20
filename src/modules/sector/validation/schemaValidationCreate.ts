import * as yup from 'yup';
import schemaBodyPlace from './schemaBodyPlace';

const schemaValidationPlaceCreate = yup.object().shape({
  body: schemaBodyPlace
});



export default schemaValidationPlaceCreate;


