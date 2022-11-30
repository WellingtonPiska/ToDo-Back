import * as yup from 'yup';
import validParamContactList from './validParamContactList';

const validContactList = yup.object().shape({
  params: validParamContactList,
});

export default validContactList;
