
import * as yup from 'yup';

const schemaMenuPlace = yup.object().shape({
  name: yup.string().required('Name is required'),

});


export default schemaMenuPlace;
