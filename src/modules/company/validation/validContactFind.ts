import * as yup from 'yup';
import validParamContactFind from './validParamContactFind';

const validContactFind = yup.object().shape({
  params: validParamContactFind,
});

export default validContactFind;
